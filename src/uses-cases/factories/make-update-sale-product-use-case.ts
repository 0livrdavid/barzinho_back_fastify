import { PrismaSalesProductsRepository } from '@/repositories/prisma/prisma-sales-products-repository'
import { UpdateSalesProductsUseCase } from '../sales-products/update'

export function makeUpdateSaleProductUseCase() {
  const saleProductRepository = new PrismaSalesProductsRepository()
  const makeUpdateProductUseCase = new UpdateSalesProductsUseCase(
    saleProductRepository,
  )

  return makeUpdateProductUseCase
}
