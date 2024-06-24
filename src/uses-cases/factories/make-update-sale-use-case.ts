import { PrismaSalesRepository } from '@/repositories/prisma/prisma-sales-repository'
import { UpdateSaleUseCase } from '../sales/update'

export function makeUpdateSaleUseCase() {
  const saleRepository = new PrismaSalesRepository()
  const makeUpdateSaleUseCase = new UpdateSaleUseCase(saleRepository)

  return makeUpdateSaleUseCase
}
