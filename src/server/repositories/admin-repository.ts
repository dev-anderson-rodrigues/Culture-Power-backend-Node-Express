import { AdminModel } from '../schemas/admin.schemas'
import { UserModel } from '../schemas/user.schema'

export class AdminRepository {
  async getIdAdmin (_id: string) {
    return await AdminModel.findById(_id)
  }

  async getIdUsers (_id: string) {
    return await UserModel.findById(_id)
  }

  async userUpdated (user: object, jewelsAmount: number) {
    return await UserModel.findByIdAndUpdate(
      user,
      { $inc: { jewelsAmount } })
  };

  async login (email: string) {
    return await AdminModel.findOne({
      $or: [{ email }]
    })
  }

  async getByEmail (email: string) {
    return await AdminModel.findOne({ email })
  }
}
