import { ProductsRository } from '@/repositories/products-repository'
import { CheckProductExist } from '../errors/check-product-exist'

interface DeleteProdutUseCaseRequest {
  id: string
}

interface DeleteProdutUseCaseResponse {
  product: null
}

export class DeleteProductUseCase {
  constructor(private productRepository: ProductsRository) {}

  async execute({
    id,
  }: DeleteProdutUseCaseRequest): Promise<DeleteProdutUseCaseResponse> {
    const checkedProductExist = await this.productRepository.findById(id)

    if (!checkedProductExist) {
      throw new CheckProductExist()
    }

    const product = await this.productRepository.delete(checkedProductExist.id)

    return {
      product,
    }
  }
}
