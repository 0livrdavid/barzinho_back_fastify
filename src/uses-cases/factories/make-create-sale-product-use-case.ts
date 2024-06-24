import { PrismaSalesProductsRepository } from '@/repositories/prisma/prisma-sales-products-repository'
import { CreateSalesProductsUseCase } from '../sales-products/create'

export function makeCreateSaleProductUseCase() {
  const saleProductRepository = new PrismaSalesProductsRepository()
  const makeCreateSaleProductUseCase = new CreateSalesProductsUseCase(
    saleProductRepository,
  )

  return makeCreateSaleProductUseCase
}
