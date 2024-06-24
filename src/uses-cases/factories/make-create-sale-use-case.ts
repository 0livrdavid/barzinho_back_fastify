import { PrismaSalesRepository } from '@/repositories/prisma/prisma-sales-repository'
import { CreateSaleUseCase } from '../sales/create'

export function makeCreateSaleUseCase() {
  const saleRepositpry = new PrismaSalesRepository()
  const makeCreateSaleUseCase = new CreateSaleUseCase(saleRepositpry)

  return makeCreateSaleUseCase
}
