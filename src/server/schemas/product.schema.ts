import { Schema, model } from 'mongoose'
import { type IProduct } from '../entities/product'

const ProductSchema = new Schema<IProduct>({
  name: String,
  value: Number,
  amount: Number,
  description: String,
  photo: String
}, { timestamps: true })

export const ProductModel = model<IProduct>('Product', ProductSchema)
