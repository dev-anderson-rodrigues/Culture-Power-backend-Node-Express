import { type Request, type Response } from 'express'
import { AdminService } from '../../../services/adminService'
import { StatusCodes } from 'http-status-codes'

const adminService = new AdminService()

export async function addOrRemoveJewels (req: Request, res: Response) {
  try {
    const { params } = req
    const { jewelsAmount } = req.body
    const user = await adminService.getByUserId(params._id)

    if (user === null) {
      console.log('User does not exist')
      return res.status(StatusCodes.UNAUTHORIZED).json('User does not exist')
    }
    if (user.jewelsAmount + jewelsAmount < 0) {
      console.log('error')
      return res.status(StatusCodes.BAD_REQUEST).json('Quantity zeroed, it is not allowed to remove')
    } else {
      const result = await adminService.userUpdate(user, jewelsAmount)
      console.log(`Jewelry successfully sent to the user ${result?.name}`)
      return res.status(StatusCodes.CREATED).json(result)
    }
  } catch {
    console.log('error')
    return res.status(StatusCodes.BAD_REQUEST).json({ Error })
  }
}
