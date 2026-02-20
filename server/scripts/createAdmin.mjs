import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '../.env') })

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gameup-betazone'

const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  role: { type: String, default: 'player' },
  isActive: { type: Boolean, default: true }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

async function createAdmin() {
  await mongoose.connect(MONGO_URI)
  console.log('MongoDB connected')

  const existing = await User.findOne({ email: 'admin@gameup.com' })
  if (existing) {
    const hashed = await bcrypt.hash('Admin@1234', 10)
    await User.updateOne({ email: 'admin@gameup.com' }, { 
      role: 'admin', 
      isActive: true,
      password: hashed 
    })
    console.log('Admin account updated!')
  } else {
    const hashed = await bcrypt.hash('Admin@1234', 10)
    await User.create({
      email: 'admin@gameup.com',
      username: 'admin',
      password: hashed,
      role: 'admin',
      isActive: true
    })
    console.log('Admin account created!')
  }

  console.log('Email: admin@gameup.com')
  console.log('Password: Admin@1234')

  await mongoose.disconnect()
}

createAdmin().catch(console.error)
