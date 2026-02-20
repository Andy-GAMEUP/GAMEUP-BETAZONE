import mongoose, { Schema, Document } from 'mongoose'

export interface IGame extends Document {
  title: string
  description: string
  genre: string
  developerId: mongoose.Types.ObjectId
  thumbnail?: string
  gameFile: string
  price: number
  isPaid: boolean
  playCount: number
  rating: number
  status: 'draft' | 'beta' | 'published' | 'archived'
  approvalStatus: 'pending' | 'review' | 'approved' | 'rejected'
  serviceType: 'beta' | 'live'
  monetization: 'free' | 'ad' | 'paid'
  testers: number
  feedbackCount: number
  betaEndDate?: Date
  suspendReason?: string
  suspendedAt?: Date
  archivedAt?: Date
  archiveReason?: string
  adminNote?: string
  rejectionReason?: string
  approvedAt?: Date
  approvedBy?: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const gameSchema = new Schema<IGame>(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      default: ''
    },
    developerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    thumbnail: {
      type: String
    },
    gameFile: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      default: 0
    },
    isPaid: {
      type: Boolean,
      default: false
    },
    playCount: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      enum: ['draft', 'beta', 'published', 'archived'],
      default: 'draft'
    },
    approvalStatus: {
      type: String,
      enum: ['pending', 'review', 'approved', 'rejected'],
      default: 'pending'
    },
    serviceType: {
      type: String,
      enum: ['beta', 'live'],
      default: 'beta'
    },
    monetization: {
      type: String,
      enum: ['free', 'ad', 'paid'],
      default: 'free'
    },
    testers: {
      type: Number,
      default: 0
    },
    feedbackCount: {
      type: Number,
      default: 0
    },
    betaEndDate: {
      type: Date
    },
    suspendReason: {
      type: String
    },
    suspendedAt: {
      type: Date
    },
    archivedAt: {
      type: Date
    },
    archiveReason: {
      type: String
    },
    adminNote: {
      type: String
    },
    rejectionReason: {
      type: String
    },
    approvedAt: {
      type: Date
    },
    approvedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<IGame>('Game', gameSchema)
