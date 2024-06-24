import { PrismaProductsRepository } from '@/repositories/prisma/prisma-products-repository'
import { CreateProductUseCase } from '../products/create'

export function makeCreateProductUseCase() {
  const productRepository = new PrismaProductsRepository()
  const makeCreateProductUseCase = new CreateProductUseCase(productRepository)

  return makeCreateProductUseCase
}
