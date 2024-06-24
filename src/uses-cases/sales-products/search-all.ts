import { SalesProductsRepository } from '@/repositories/sale-products-repository'
import { SalesProducts } from '@prisma/client'

interface SearchAllSalesProductsUsersUseCase {
  salesProducts: SalesProducts[]
}

export class SearchAllSalesProductsUseCase {
  constructor(private salesProductsRepository: SalesProductsRepository) {}

  async execute(): Promise<SearchAllSalesProductsUsersUseCase> {
    const salesProducts = await this.salesProductsRepository.search()

    return {
      salesProducts,
    }
  }
}
