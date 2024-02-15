import { Schema, model } from 'mongoose';
import { IProduct } from '../entities/product';
import { string } from 'yup';

const ProductSchema = new Schema<IProduct>({
  name: String,
  value: Number,
  amount: Number,
  description: String,
  photo: String
}, { timestamps: true });

export const ProductModel = model('product', ProductSchema);