import apiClient from './api'

export interface PaymentData {
  gameId: string
  amount: number
}

export const paymentService = {
  createPayment: async (data: PaymentData) => {
    const response = await apiClient.post('/payments/create', data)
    return response.data
  },

  verifyPayment: async (paymentId: string) => {
    const response = await apiClient.post('/payments/verify', { paymentId })
    return response.data
  }
}
