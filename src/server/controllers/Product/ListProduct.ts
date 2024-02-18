import { StatusCodes } from 'http-status-codes'
import { type Request, type Response } from 'express'
import { type IProduct } from '../../entities/product'
import { ProductService } from '../../services/productService'

export async function listProducts (req: Request<{}, {}, IProduct>, res: Response) {
  const productService = new ProductService()

  const products = await productService.ListProducts()
  console.log(products)
  return res.status(StatusCodes.ACCEPTED).json({ products })
}
