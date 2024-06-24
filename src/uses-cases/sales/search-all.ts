import { SalesRository } from '@/repositories/sales-repository'
import { Sale } from '@prisma/client'

interface SearchAllSaleUseCaseResponse {
  sales: Sale[]
}

export class SearchAllSaleUseCase {
  constructor(private saleRepository: SalesRository) {}

  async execute(): Promise<SearchAllSaleUseCaseResponse> {
    const sales = await this.saleRepository.search()

    return {
      sales,
    }
  }
}
