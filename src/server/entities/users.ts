// import { Document } from 'mongoose';
import { IProduct } from './product';
import { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  _id?: string
  name: string
  email: string
  password: string
  jewelsAmount: number,
  photo: string
  products?: any[],
  favoriteProducts?: any[],
}

export interface IUserDTO {
  name: string
  email: string
  password: string
  photo: string
}

