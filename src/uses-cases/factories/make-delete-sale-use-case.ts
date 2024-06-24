import { PrismaSalesRepository } from '@/repositories/prisma/prisma-sales-repository'
import { DeleteSaleUseCase } from '../sales/delete'

export function makeDeleteSaleUseCase() {
  const saleRepositpry = new PrismaSalesRepository()
  const makeDeleteSaleUseCase = new DeleteSaleUseCase(saleRepositpry)

  return makeDeleteSaleUseCase
}
