import { PrismaProductsRepository } from '@/repositories/prisma/prisma-products-repository'
import { DeleteProductUseCase } from '../products/delete'

export function makeDeleteProductUseCase() {
  const productRepository = new PrismaProductsRepository()
  const makeDeleteProductUseCase = new DeleteProductUseCase(productRepository)

  return makeDeleteProductUseCase
}
