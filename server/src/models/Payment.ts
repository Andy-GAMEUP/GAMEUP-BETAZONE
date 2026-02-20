import mongoose, { Schema, Document } from 'mongoose'

export interface IPayment extends Document {
  userId: mongoose.Types.ObjectId
  gameId: mongoose.Types.ObjectId
  amount: number
  status: 'pending' | 'completed' | 'failed'
  paymentMethod: string
  transactionId: string
  createdAt: Date
}

const paymentSchema = new Schema<IPayment>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    gameId: {
      type: Schema.Types.ObjectId,
      ref: 'Game',
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending'
    },
    paymentMethod: {
      type: String,
      required: true
    },
    transactionId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<IPayment>('Payment', paymentSchema)
