import { SalesProductsRepository } from '@/repositories/sale-products-repository'
import { SalesProducts } from '@prisma/client'
import { CheckSaleProductExist } from '../errors/check-sale-product-exist'

interface UpdateSalesProductsUseCaseRequest {
  id: string
  quantity: number
  productId: string
  saleId: string
}

interface UpdateSalesProductsUseCaseResponse {
  saleProduct: SalesProducts
}

export class UpdateSalesProductsUseCase {
  constructor(private saleProductRepository: SalesProductsRepository) {}

  async execute({
    id,
    quantity,
    productId,
    saleId,
  }: UpdateSalesProductsUseCaseRequest): Promise<UpdateSalesProductsUseCaseResponse> {
    const checkSaleProductExist = await this.saleProductRepository.findById(id)

    if (!checkSaleProductExist) {
      throw new CheckSaleProductExist()
    }

    const saleProduct = await this.saleProductRepository.update(
      checkSaleProductExist.id,
      {
        quantity,
        product_id: productId,
        sale_id: saleId,
      },
    )

    return {
      saleProduct,
    }
  }
}
