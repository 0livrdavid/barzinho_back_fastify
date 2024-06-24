import { PrismaProductsRepository } from '@/repositories/prisma/prisma-products-repository'
import { UpdateProductUseCase } from '../products/update'

export function makeUpdateProductUseCase() {
  const productRepository = new PrismaProductsRepository()
  const makeUpdateProductUseCase = new UpdateProductUseCase(productRepository)

  return makeUpdateProductUseCase
}
