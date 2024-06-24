import { PrismaSalesProductsRepository } from '@/repositories/prisma/prisma-sales-products-repository'
import { DeleteSaleProductUseCase } from '../sales-products/delete'

export function makeDeleteSaleProductUseCase() {
  const saleProductRepository = new PrismaSalesProductsRepository()
  const makeDeleteSaleProductUseCase = new DeleteSaleProductUseCase(
    saleProductRepository,
  )

  return makeDeleteSaleProductUseCase
}
