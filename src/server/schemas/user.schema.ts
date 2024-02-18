import { Schema } from 'mongoose'
import { mongoose } from '../../configs/connection'
import { type IUser } from '../entities/users'

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, minLength: 6, required: true },
  jewelsAmount: { type: Number, default: 0 },
  photo: { type: String, default: '' },
  products: { type: [Schema.Types.Mixed], default: [], ref: 'products' },
  favoriteProducts: { type: [Schema.Types.Mixed], default: [], ref: 'products' }
}, { timestamps: true })

export const UserModel = mongoose.model<IUser>('User', UserSchema)
