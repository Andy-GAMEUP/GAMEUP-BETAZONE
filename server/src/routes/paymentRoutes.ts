import { Router } from 'express'
import { createPayment, verifyPayment } from '../controllers/paymentController'
import { authenticateToken } from '../middleware/auth'

const router = Router()

// 🔒 결제 API 인증 추가 (보안 취약점 수정)
router.post('/create', authenticateToken, createPayment)
router.post('/verify', authenticateToken, verifyPayment)

export default router