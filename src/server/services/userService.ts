import bcrypt from 'bcrypt'
import { UserRepository } from '../repositories/user-repository'
import { sign } from 'jsonwebtoken';
import { AdminModel } from '../schemas/admin.schemas';
import { AdminRepository } from '../repositories/admin-repository';
import { IUser } from '../entities/users';

export class UserService {
  adminRepository: AdminRepository;
  userRepository: UserRepository;
  constructor() {
    this.adminRepository = new AdminRepository()
    this.userRepository = new UserRepository();
  }
  
  async userCreate(
    name: string,
    email: string,
    password: string,
    photo: string
    ) {
      const CreateUser = await this.userRepository.save(
        name,
        email,
        await bcrypt.hash(password, 8),
        photo
        )
        
        return CreateUser;
      }
      async getByEmail(email: string) {
        const user = await this.userRepository.login(email);
        return user
      }
      async getById(_id: string) {
        const user = await this.userRepository.FindById(_id);
        return user
      }
      async userByIdAndUpdate(_id: string, file: string) {
        const user = await this.userRepository.userUpdatedPhoto(_id, file);
        return user
      }
    }
    