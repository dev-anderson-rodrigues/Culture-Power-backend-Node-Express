import { StatusCodes } from 'http-status-codes'
import { type Request, type Response } from 'express'
import { type IProductDTO } from '../../entities/product'
import { ProductService } from '../../services'

const productService = new ProductService()

export async function createProduct (req: Request<{}, {}, IProductDTO>, res: Response) {
  const { name, amount, description, photo, value } = req.body

  const createProduct = await productService.productCreate(
    name,
    value,
    amount,
    description,
    photo
  )

  console.log(createProduct)
  return res.status(StatusCodes.CREATED).json(createProduct)
}
