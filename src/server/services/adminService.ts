import { AdminRepository } from '../repositories/admin-repository'

export class AdminService {
  adminRepository: AdminRepository
  constructor () {
    this.adminRepository = new AdminRepository()
  }

  async getByEmailAdmin (email: string) {
    const admin = await this.adminRepository.getByEmail(email)
    return admin
  }

  async getById (_id: string) {
    const admin = await this.adminRepository.getIdAdmin(_id)
    return admin
  }

  async getByUserId (_id: string) {
    const user = await this.adminRepository.getIdUsers(_id)
    return user
  }

  async userUpdate (user: object, jewelsAmount: number) {
    const userUpdate = await this.adminRepository.userUpdated(user, jewelsAmount)
    return userUpdate
  }
}
