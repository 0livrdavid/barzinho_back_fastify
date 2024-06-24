import { PrismaSalesProductsRepository } from '@/repositories/prisma/prisma-sales-products-repository'
import { SearchAllSalesProductsUseCase } from '../sales-products/search-all'

export function makeSearchAllSalesProductUseCase() {
  const saleProductRepository = new PrismaSalesProductsRepository()
  const makeSearchAllProductUseCase = new SearchAllSalesProductsUseCase(
    saleProductRepository,
  )

  return makeSearchAllProductUseCase
}
