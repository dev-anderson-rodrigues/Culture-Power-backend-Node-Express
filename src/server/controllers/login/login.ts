/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { AdminService } from '../../services/adminService';
import { ILoginDTO, jwtPayload } from '../../entities/login';
import { StatusCodes } from 'http-status-codes';
import  Jwt, { sign }  from 'jsonwebtoken';
import { UserService } from '../../services';
import { isAdmin } from '../../middlewares/Permission';

const loginService = new AdminService();
const userService = new UserService();

export async function login (req: Request<{}, {}, ILoginDTO>, res: Response) {
  const { email, password } = req.body;
  let isAdmin = false
  let user;
  let admin;

  user = await userService.getByEmail(email);
    if(user && await bcrypt.compare(password, user.password as string)) {
      isAdmin = false;
    } else {
        user = null;
    }

  if (!user) {
    admin = await loginService.getByEmailAdmin(email)
    if(admin && await bcrypt.compare(password, admin.password as string)) {
     isAdmin = true;
    }else
      return res.status(StatusCodes.UNAUTHORIZED).json({ credentials: 'Invalid credentials' });
    }

    const id = isAdmin ? admin?._id : user?._id as string;
    const payload = {id};
    const secretKey = process.env.AUTH_CONFIG as string;
    const options = { expiresIn: 24 * 60 * 60};
    const token = sign(payload, secretKey, options,);

    return res.status(StatusCodes.OK).json({userOrAdmin: isAdmin ? { admin } : { user },
      token });
    
  }
// buscar usuario tabela admin se nao achar buscar na tabela user se não encontrar em nenhuma das duas invalid credencials
