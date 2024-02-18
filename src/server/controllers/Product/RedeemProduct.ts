import { ProductService } from '../../services/productService'
import { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { UserService } from '../../services/userService'

export async function RedeemProductId (req: Request, res: Response) {
  const productService = new ProductService()
  const userService = new UserService()

  const { _id } = req.params
  const user = req.body

  const product = await productService.ListProductId(_id)
  const userId = await userService.getById(user._id)
  console.log(product)
  console.log(userId)

  if (userId === null) {
    console.log('User does not exist')
    return res.status(StatusCodes.UNAUTHORIZED).json('User does not exist')
  }
  if (!Array.isArray(userId.products)) {
    throw new Error('O campo arrayField não é um array')
  }
  if (product === null) {
    console.log('Product does not exist')
    return res.status(StatusCodes.UNAUTHORIZED).json('Product does not exist')
  }

  if (userId.jewelsAmount < product.value) {
    return res.status(StatusCodes.UNAUTHORIZED).json('Number of Jewels Sold Out')
  }

  if (product.amount < 1) {
    return res.status(403).json({ error: 'Out-of-stock product' })
  }
  userId.jewelsAmount -= product.value
  product.amount = product.amount <= 0 ? 0 : product.amount -= 1
  await product.save()

  const result = await userService.updateQuantityProducts(userId, product)

  console.log()
  console.log(result)
  return res.status(StatusCodes.ACCEPTED).json({ result })
}
