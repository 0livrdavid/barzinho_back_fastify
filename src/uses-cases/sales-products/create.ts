import { SalesProductsRepository } from '@/repositories/sale-products-repository'
import { SalesProducts } from '@prisma/client'

interface CreateSalesProductsUseCaseRequest {
  quantity: number
  productId: string
  saleId: string
}

interface CreateSalesProductsUseCaseResponse {
  saleProduct: SalesProducts
}

export class CreateSalesProductsUseCase {
  constructor(private saleProductRepository: SalesProductsRepository) {}

  async execute({
    quantity,
    productId,
    saleId,
  }: CreateSalesProductsUseCaseRequest): Promise<CreateSalesProductsUseCaseResponse> {
    const saleProduct = await this.saleProductRepository.create({
      quantity,
      product_id: productId,
      sale_id: saleId,
    })

    return {
      saleProduct,
    }
  }
}
