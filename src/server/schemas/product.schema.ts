import { Schema, model } from 'mongoose'
import { type IProduct } from '../entities/product'

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  photo: { type: String, default: '' }
}, { timestamps: true })

export const ProductModel = model<IProduct>('Product', ProductSchema)
