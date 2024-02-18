import { StatusCodes } from 'http-status-codes'

import { type IUserDTO } from '../../entities/users'
import { type Request, type Response } from 'express'

import { UserService } from '../../services/userService'
import { UserRepository } from '../../repositories/user-repository'

const userService = new UserService()
const userRepository = new UserRepository()

export async function createUser (req: Request<{}, {}, IUserDTO>, res: Response) {
  const { body } = req
  const userAlreadyExists = await userRepository.findByNameOrEmail(body.name, body.email)
  if (userAlreadyExists) {
    console.log('User already exists')
    return res.status(StatusCodes.UNAUTHORIZED).json('User already exists!')
  }
  const result = await userService.userCreate(
    body.name,
    body.email,
    body.password
  )

  console.log(result)
  return res.status(StatusCodes.CREATED).json(result)
}
