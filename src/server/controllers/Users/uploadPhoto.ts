import { type Request, type Response } from 'express'
import { UserService } from '../../services/userService'
import { StatusCodes } from 'http-status-codes'

export async function uploadUserPhoto (req: Request, res: Response) {
  const userService = new UserService()

  const { file } = req
  const userId = req.params

  console.log(file?.filename)
  if (!file) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'Non-existent file' })
  }

  const existUser = await userService.getById(userId._id)
  if (!existUser) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Error: User not found.' })

  const photoToUpdate = await userService.userByIdAndUpdate(userId._id, file?.filename)
  if (!photoToUpdate) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Error: User not found.' })

  res.status(StatusCodes.OK).json(photoToUpdate)
}
