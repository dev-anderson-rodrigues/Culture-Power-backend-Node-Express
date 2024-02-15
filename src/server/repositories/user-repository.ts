import { UserModel } from '../schemas/user.schema';
import { IUserDTO, IUser,} from '../entities/users';
import { IProduct } from '../entities/product';

export class UserRepository{
  
  async findByNameOrEmail(name: string, email: string) {
    return await UserModel.findOne({
      $or: [{ name }, { email }]
    });
  }

  async save<IUser>(
    name: string,
    email: string,
    password: string,
    photo: string,
  )
  {
    return (await UserModel.create<IUserDTO>({
      name,
      email,
      password,
      photo
    }))
  }

  async login(email: string) {
    
    return await UserModel.findOne({
      $or: [{ email }]
    });
    
  }
  async FindByUser(email: string, password:string) {
    
    return await UserModel.findOne({ email, password });
    
  }
  async FindById(_id: string) {
    
    return await UserModel.findById( _id );
    
  }
  async userUpdated(userId: IUser, product: any): Promise<IUser> {  
    // const user = await UserModel.findById(userId);
    
    
    userId.products?.push(product);
    

    return await userId?.save()
      // user,
      // { $inc: { products: product } });
  };
}