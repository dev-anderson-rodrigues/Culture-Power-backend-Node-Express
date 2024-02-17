import { ProductService } from '../../services/productService'
import { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'

export async function UpdatedProduct (req: Request, res: Response) {
  const productService = new ProductService()
  const { _id } = req.params
  const productUpdateBady = req.body

  const UpdatedProduct = await productService.updateProduct(_id, productUpdateBady)

  console.log(productUpdateBady)
  console.log(UpdatedProduct)
  console.log('Updated Product!')
  return res.status(StatusCodes.ACCEPTED).json({ UpdatedProduct })
}
