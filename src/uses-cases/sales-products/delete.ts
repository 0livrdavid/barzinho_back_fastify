import { SalesProductsRepository } from '@/repositories/sale-products-repository'
import { CheckSaleProductExist } from '../errors/check-sale-product-exist'

interface DeleteSaleProductUseCaseRequest {
  id: string
}

interface DeleteSaleProductUseCaseResponse {
  saleProduct: null
}

export class DeleteSaleProductUseCase {
  constructor(private saleProductRepository: SalesProductsRepository) {}

  async execute({
    id,
  }: DeleteSaleProductUseCaseRequest): Promise<DeleteSaleProductUseCaseResponse> {
    const checkSaleProductExist = await this.saleProductRepository.findById(id)

    if (!checkSaleProductExist) {
      throw new CheckSaleProductExist()
    }

    const saleProduct = await this.saleProductRepository.delete(
      checkSaleProductExist.id,
    )

    return {
      saleProduct,
    }
  }
}
