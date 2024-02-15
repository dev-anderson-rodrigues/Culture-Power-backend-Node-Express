import { IUser } from "../../../entities/users";
import { Request, Response } from "express";
import { AdminService } from "../../../services/adminService";
import { StatusCodes } from "http-status-codes";
import { AdminRepository } from "../../../repositories/admin-repository";

const adminService = new AdminService()
const adminRepository = new AdminRepository()


export async function  addJewels (req: Request, res: Response){
  try{
    const {params} = req;
    const {jewelsAmount} = req.body;

    const user = await adminService.getByUserId(params._id);
    if (user === null) {
      console.log('User does not exist');
      return res.status(StatusCodes.UNAUTHORIZED).json('User does not exist');
    }
    const result = await adminRepository.userUpdated(user,jewelsAmount);
    console.log(`Jewelry successfully sent to the user ${result?.name}`);
    return res.status(StatusCodes.CREATED).json(result);

  }catch{
    console.log('error');
    return res.status(StatusCodes.BAD_REQUEST).json({ Error });
  }
  }