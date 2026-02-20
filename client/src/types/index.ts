export interface User {
  id: string
  email: string
  username: string
  role: 'developer' | 'player'
  createdAt: Date
  updatedAt: Date
}

export interface Game {
  id: string
  title: string
  description: string
  developerId: string
  thumbnail?: string
  gameFile: string
  price: number
  isPaid: boolean
  playCount: number
  rating: number
  status: 'draft' | 'beta' | 'published'
  createdAt: Date
  updatedAt: Date
}

export interface Payment {
  id: string
  userId: string
  gameId: string
  amount: number
  status: 'pending' | 'completed' | 'failed'
  paymentMethod: string
  transactionId: string
  createdAt: Date
}

export interface Feedback {
  id: string
  userId: string
  gameId: string
  rating: number
  comment: string
  createdAt: Date
}
