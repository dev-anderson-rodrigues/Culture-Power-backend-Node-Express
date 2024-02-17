/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Request, type Response, type NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'
import { type jwtPayload } from '../entities/login'

export function auth (
  req: Request,
  res: Response,
  next: NextFunction): Response<any, Record<string, any>> | undefined {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ errors: 'No token provided!' })
  }

  const tokenParts = authHeader.split(' ')

  if (tokenParts.length !== 2) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Token error!' })
  }

  const [tokenSchema, token] = tokenParts

  if (tokenSchema !== 'Bearer') {
    return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Token error!' })
  }
  const { id } = jwt.verify(token, process.env.AUTH_CONFIG!) as jwtPayload

  req.params.userId = id

  next()
}
