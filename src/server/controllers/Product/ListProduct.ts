import { StatusCodes } from 'http-status-codes'
import { type Request, type Response } from 'express'
import { type IProduct } from '../../entities/product'
import { ProductModel } from '../../schemas/product.schema'

export async function listProducts (req: Request<{}, {}, IProduct>, res: Response) {
  const products = await ProductModel.find()

  console.log(products)
  return res.status(StatusCodes.ACCEPTED).json({ products })
}
