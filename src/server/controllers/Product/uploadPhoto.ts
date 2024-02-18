import { type Request, type Response } from 'express'
import { ProductService } from '../../services/productService'
import { StatusCodes } from 'http-status-codes'

export async function uploadProductPhoto (req: Request, res: Response) {
  const productService = new ProductService()

  const { file } = req
  const productId = req.params

  if (!file) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'Non-existent file' })
  }

  const existProduct = await productService.ListProductId(productId._id)
  if (!existProduct) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Error: Product not found.' })

  const photoToUpdate = await productService.findByIdAndUpdate(productId._id, file?.filename)
  if (!photoToUpdate) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Error: Product not found.' })

  console.log(photoToUpdate)
  res.status(StatusCodes.OK).json(photoToUpdate)
}
