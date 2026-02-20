import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import connectDB from './config/database'
import gameRoutes from './routes/gameRoutes'
import userRoutes from './routes/userRoutes'
import paymentRoutes from './routes/paymentRoutes'
import adminRoutes from './routes/adminRoutes'
import playerRoutes from './routes/playerRoutes'
import communityRoutes from './routes/communityRoutes'
import { errorHandler, notFound } from './middleware/errorHandler'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

app.use('/api/games', gameRoutes)
app.use('/api/users', userRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api', playerRoutes)
app.use('/api/community', communityRoutes)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app
