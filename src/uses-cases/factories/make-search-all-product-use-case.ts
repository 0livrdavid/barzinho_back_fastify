import { PrismaProductsRepository } from '@/repositories/prisma/prisma-products-repository'
import { SearchAllProductUseCase } from '../products/search-all'

export function makeSearchAllProductUseCase() {
  const productRepository = new PrismaProductsRepository()
  const makeSearchAllProductUseCase = new SearchAllProductUseCase(
    productRepository,
  )

  return makeSearchAllProductUseCase
}
