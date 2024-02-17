import { type IAdmin } from '../entities/admin'
import { Schema, model } from 'mongoose'

const AdminSchema = new Schema<IAdmin>({
  name: { type: String, unique: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, minLength: 6 }
}, { timestamps: true })

export const AdminModel = model<IAdmin>('Admin', AdminSchema)
