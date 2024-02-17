import { type IProductDTO } from '../entities/product'
import { ProductModel } from '../schemas/product.schema'

export class ProductRepository {
  async save<IProduct>(name: string, value: number, amount: number, description: string, photo: string) {
    return await ProductModel.create<IProductDTO>({
      name,
      value,
      amount,
      description,
      photo
    })
  }

  async findByProducts () {
    return await ProductModel.find()
  }

  async findById (_id: string) {
    return await ProductModel.findById(_id)
  }

  async findByIdAndUpdate (_id: string, productUpdate: IProductDTO) {
    const Product = await ProductModel.findByIdAndUpdate(_id, { name: productUpdate.name, value: productUpdate.value, amount: productUpdate.amount, description: productUpdate.description, photo: productUpdate.photo }).exec()

    return await Product!.save()
  }
}
