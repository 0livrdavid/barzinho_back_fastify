import { PrismaSalesRepository } from '@/repositories/prisma/prisma-sales-repository'
import { SearchAllSaleUseCase } from '../sales/search-all'

export function makeSearchAllUseCase() {
  const saleRepository = new PrismaSalesRepository()
  const makeSearchAllUseCase = new SearchAllSaleUseCase(saleRepository)

  return makeSearchAllUseCase
}
