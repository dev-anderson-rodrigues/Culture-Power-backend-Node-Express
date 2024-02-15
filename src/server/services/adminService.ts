import bcrypt from 'bcrypt';
import { AdminRepository } from '../repositories/admin-repository';
import { response } from 'express';
import { ProductRepository } from '../repositories/productRepository';
import { sign } from 'jsonwebtoken';


export class AdminService {
  adminRepository:AdminRepository;
  constructor() {
    this.adminRepository =  new AdminRepository();
  }
  async getByEmailAdmin(email: string) {
    const admin = await this.adminRepository.getByEmail(email);
    return admin
  }
  async getById(_id: string) {
    const admin = await this.adminRepository.getIdAdmin(_id);
    return admin
  }
  async getByUserId(_id: string) {
    const user = await this.adminRepository.getIdUsers(_id);
    return user
  }
  // async userAddJewels(user:string) {
  //   return await this.adminRepository.userUpdated(user);
  // };
  // async addJewelsUsers(jewelsAmount:number) {
  //   const Jewels = await this.adminRepository.updateUser(jewelsAmount);
  //   return Jewels
  // }
}