import { type Request, type Response, type NextFunction } from 'express'
import { AdminService } from '../services/adminService'
import { StatusCodes } from 'http-status-codes'

const adminService = new AdminService()

export async function isAdmin (
  req: Request,
  res: Response,
  next: NextFunction) {
  const { userId } = req.params
  const getByadmin = await adminService.getById(userId)
  console.log(`Welcome admin!: ${getByadmin?.name}`)
  if (getByadmin === null) {
    return res.status(StatusCodes.UNAUTHORIZED).json(console.log('Permission denied!'))
  }
  next()
};
