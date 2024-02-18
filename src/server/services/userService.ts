import bcrypt from 'bcrypt'
import { UserRepository } from '../repositories/user-repository'
import { AdminRepository } from '../repositories/admin-repository'
import { type IUser } from '../entities/users'

export class UserService {
  adminRepository: AdminRepository
  userRepository: UserRepository
  constructor () {
    this.adminRepository = new AdminRepository()
    this.userRepository = new UserRepository()
  }

  async userCreate (
    name: string,
    email: string,
    password: string
  ) {
    const CreateUser = await this.userRepository.save(
      name,
      email,
      await bcrypt.hash(password, 8)
    )

    return CreateUser
  }

  async getByEmail (email: string) {
    const user = await this.userRepository.login(email)
    return user
  }

  async getById (_id: string) {
    const user = await this.userRepository.FindById(_id)
    return user
  }

  async userByIdAndUpdatePhoto (_id: string, file: string) {
    const user = await this.userRepository.userUpdatedPhoto(_id, file)
    return user
  }

  async updateQuantityProducts (userId: IUser, product: any) {
    const user = await this.userRepository.userUpdated(userId, product)
    return user
  }

  async findByNameOrEmail (name: string, email: string) {
    const user = await this.userRepository.findByNameOrEmail(name, email)
    return user
  }
}
