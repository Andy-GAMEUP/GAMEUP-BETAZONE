import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import Game from '../models/Game'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../../../.env') })

const THUMBNAILS: Record<string, string> = {
  '사이버 퀘스트 2077': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
  '드래곤 하트 사가':   'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=300&fit=crop',
  '우주 전사단':        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=300&fit=crop',
  '퍼즐 마스터':        'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=400&h=300&fit=crop',
  '레이싱 킹스':        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
}

const updateThumbnails = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/gameup-betazone'
    await mongoose.connect(mongoUri)
    console.log('MongoDB 연결 성공\n')

    for (const [title, thumbnail] of Object.entries(THUMBNAILS)) {
      const result = await Game.updateOne({ title }, { $set: { thumbnail } })
      if (result.modifiedCount > 0) {
        console.log(`✅ [${title}] 썸네일 업데이트 완료`)
      } else {
        console.log(`⚠️  [${title}] 게임을 찾을 수 없거나 이미 설정됨`)
      }
    }

    console.log('\n✅ 모든 썸네일 업데이트 완료')
    await mongoose.connection.close()
    process.exit(0)
  } catch (error) {
    console.error('❌ 오류:', error)
    process.exit(1)
  }
}

updateThumbnails()
