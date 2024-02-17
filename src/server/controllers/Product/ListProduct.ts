import { StatusCodes } from 'http-status-codes'
import { type Request, type Response } from 'express'
import { type IProductDTO } from '../../entities/product'
import { ProductModel } from '../../schemas/product.schema'

export async function listProducts (req: Request<{}, {}, IProductDTO>, res: Response) {
  const produtos = await ProductModel.find()

  console.log(produtos)
  return res.status(StatusCodes.ACCEPTED).json({ produtos })
}
