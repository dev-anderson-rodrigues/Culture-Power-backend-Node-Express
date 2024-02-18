import { type IProductDTO, type IProduct } from '../entities/product'
import { ProductModel } from '../schemas/product.schema'

export class ProductRepository {
  async save<IProduct>(name: string, value: number, amount: number, description: string) {
    return await ProductModel.create<IProductDTO>({
      name,
      value,
      amount,
      description
    })
  }

  async findByProducts () {
    return await ProductModel.find()
  }

  async findById (_id: string) {
    return await ProductModel.findById(_id)
  }

  async findByIdAndUpdate (_id: string, productUpdate: IProduct) {
    const Product = await ProductModel.findByIdAndUpdate(_id, { name: productUpdate.name, value: productUpdate.value, amount: productUpdate.amount, description: productUpdate.description, photo: productUpdate.photo }).exec()

    return await Product!.save()
  }

  async productUpdatedPhoto (productId: string, file: string) {
    const product = await ProductModel.findByIdAndUpdate(productId, { photo: file }).exec()

    return product
  };
}
