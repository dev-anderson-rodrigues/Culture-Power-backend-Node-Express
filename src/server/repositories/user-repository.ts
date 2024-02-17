import { UserModel } from '../schemas/user.schema'
import { type IUserDTO, type IUser } from '../entities/users'

export class UserRepository {
  async findByNameOrEmail (name: string, email: string) {
    return await UserModel.findOne({
      $or: [{ name }, { email }]
    })
  }

  async save<IUser>(
    name: string,
    email: string,
    password: string,
    photo: string
  ) {
    return (await UserModel.create<IUserDTO>({
      name,
      email,
      password,
      photo
    }))
  }

  async login (email: string) {
    return await UserModel.findOne({
      $or: [{ email }]
    })
  }

  async FindByUser (email: string, password: string) {
    return await UserModel.findOne({ email, password })
  }

  async FindById (_id: string) {
    return await UserModel.findById(_id)
  }

  async userUpdated (userId: IUser, product: any): Promise<IUser> {
    userId.products?.push(product)

    return await userId?.save()
  };

  async userUpdatedPhoto (userId: string, file: string) {
    const user = await UserModel.findByIdAndUpdate(userId, { photo: file }).exec()

    return user
  };
}
