import { ProductsRository } from '@/repositories/products-repository'
import { Products } from '@prisma/client'

interface ProductUseCaseRequest {
  name: string
  description: string
  buyValue: number
  sellValue: number
}

interface ProductUseCaseResponse {
  product: Products
}

export class CreateProductUseCase {
  constructor(private productRepository: ProductsRository) {}

  async execute({
    name,
    description,
    buyValue,
    sellValue,
  }: ProductUseCaseRequest): Promise<ProductUseCaseResponse> {
    const product = await this.productRepository.create({
      name,
      description,
      buyValue,
      sellValue,
    })

    return {
      product,
    }
  }
}
