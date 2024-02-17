import { ProductRepository } from '../repositories/productRepository'

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

  async productCreate (
    name: string,
    value: number,
    amount: number,
    description: string,
    photo: string
  ) {
    const CreateProduct = await this.productRepository.save(
      name,
      value,
      amount,
      description,
      photo
    )

    return CreateProduct
  }
}
