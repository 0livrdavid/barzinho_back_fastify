import { ProductsRository } from '@/repositories/products-repository'
import { Products } from '@prisma/client'

interface SearchAllProductsUseCase {
  products: Products[]
}

export class SearchAllProductUseCase {
  constructor(private productRepository: ProductsRository) {}

  async execute(): Promise<SearchAllProductsUseCase> {
    const products = await this.productRepository.search()

    return {
      products,
    }
  }
}
