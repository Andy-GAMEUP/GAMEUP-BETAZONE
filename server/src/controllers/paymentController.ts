import { Request, Response } from 'express'

export const createPayment = async (req: Request, res: Response) => {
  try {
    const { gameId, amount } = req.body
    res.json({ message: 'Payment created', paymentIntent: 'dummy-payment-id' })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

export const verifyPayment = async (req: Request, res: Response) => {
  try {
    const { paymentId } = req.body
    res.json({ message: 'Payment verified', success: true })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}
