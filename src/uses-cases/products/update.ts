import { ProductsRository } from '@/repositories/products-repository'
import { Products } from '@prisma/client'
import { CheckProductExist } from '../errors/check-product-exist'

interface UpdateProductsUseCaseRequest {
  id: string
  name: string
  description: string
  valor: number
}

interface ProductUseCaseResponse {
  product: Products
}

export class UpdateProductUseCase {
  constructor(private productRepository: ProductsRository) {}

  async execute({
    id,
    name,
    description,
    valor,
  }: UpdateProductsUseCaseRequest): Promise<ProductUseCaseResponse> {
    const checkedProductExist = await this.productRepository.findById(id)

    if (!checkedProductExist) {
      throw new CheckProductExist()
    }

    const product = await this.productRepository.update(
      checkedProductExist.id,
      {
        name,
        description,
        valor,
      },
    )

    return {
      product,
    }
  }
}
