import { ProductRepository } from '../repositories/productRepository'
import { type IProductDTO, type IProduct } from '../entities/product'

export class ProductService {
  productRepository: ProductRepository
  constructor () {
    this.productRepository = new ProductRepository()
  }

  async ListProducts () {
    return await this.productRepository.findByProducts()
  }

  async ListProductId (_id: string) {
    return await this.productRepository.findById(_id)
  }

  async updateProduct (_id: string,
    productUpdate: IProduct
  ) {
    return await this.productRepository.findByIdAndUpdate(_id,
      productUpdate
    )
  }

  async productCreate (
    name: string,
    value: number,
    amount: number,
    description: string
  ) {
    const CreateProduct = await this.productRepository.save(
      name,
      value,
      amount,
      description
    )
    return CreateProduct
  }

  async findByIdAndUpdate (_id: string, file: string) {
    const user = await this.productRepository.productUpdatedPhoto(_id, file)
    return user
  }
}
