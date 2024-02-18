import { type Request, type Response, type NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

export async function searchLoggedinUser (req: Request,
  res: Response,
  next: NextFunction) {
  const { userId } = req.body
  if (userId) {
    res.status(StatusCodes.OK).json(`Logged-in user: ${userId}`)
  } else {
    res.status(StatusCodes.BAD_REQUEST).json('No user logged in')
  }
}
