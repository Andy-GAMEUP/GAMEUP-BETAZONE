import multer from 'multer'
import path from 'path'
import { Request } from 'express'

const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) => {
    if (file.fieldname === 'gameFile') {
      cb(null, 'uploads/games')
    } else if (file.fieldname === 'thumbnail') {
      cb(null, 'uploads/thumbnails')
    } else {
      cb(null, 'uploads')
    }
  },
  filename: (req: Request, file: Express.Multer.File, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.fieldname === 'gameFile') {
    const allowedTypes = ['.html', '.zip']
    const ext = path.extname(file.originalname).toLowerCase()
    if (allowedTypes.includes(ext)) {
      cb(null, true)
    } else {
      cb(new Error('게임 파일은 HTML 또는 ZIP 형식만 가능합니다'))
    }
  } else if (file.fieldname === 'thumbnail') {
    const allowedTypes = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
    const ext = path.extname(file.originalname).toLowerCase()
    if (allowedTypes.includes(ext)) {
      cb(null, true)
    } else {
      cb(new Error('썸네일은 이미지 파일만 가능합니다'))
    }
  } else {
    cb(null, true)
  }
}

const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE || '100000000')

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE
  }
})

export const uploadFields = upload.fields([
  { name: 'gameFile', maxCount: 1 },
  { name: 'thumbnail', maxCount: 1 }
])
