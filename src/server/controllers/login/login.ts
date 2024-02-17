import { type Request, type Response } from 'express'
import bcrypt from 'bcrypt'
import { AdminService } from '../../services/adminService'
import { type ILoginDTO } from '../../entities/login'
import { StatusCodes } from 'http-status-codes'
import { sign } from 'jsonwebtoken'
import { UserService } from '../../services'

const loginService = new AdminService()
const userService = new UserService()

export async function login (req: Request<{}, {}, ILoginDTO>, res: Response) {
  const { email, password } = req.body
  let isAdmin = false
  let user
  let admin

  user = await userService.getByEmail(email)
  if (user && await bcrypt.compare(password, user.password)) {
    isAdmin = false
  } else {
    user = null
  }

  if (!user) {
    admin = await loginService.getByEmailAdmin(email)
    if (admin && await bcrypt.compare(password, admin.password)) {
      isAdmin = true
    } else { return res.status(StatusCodes.UNAUTHORIZED).json({ credentials: 'Invalid credentials' }) }
  }

  const id = isAdmin ? admin?._id : user?._id!
  const payload = { id }
  const secretKey = process.env.AUTH_CONFIG!
  const options = { expiresIn: 24 * 60 * 60 }
  const token = sign(payload, secretKey, options)

  return res.status(StatusCodes.OK).json({
    userOrAdmin: isAdmin ? { admin } : { user },
    token
  })
}
