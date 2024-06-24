import { SalesRository } from '@/repositories/sales-repository'
import { CheckSaleExist } from '../errors/check-sale-existe'

interface CreateSaleUseCaseRequest {
  id: string
}

interface CreateSaleUseCaseResponse {
  sale: null
}

export class DeleteSaleUseCase {
  constructor(private saleRepositpry: SalesRository) {}

  async execute({
    id,
  }: CreateSaleUseCaseRequest): Promise<CreateSaleUseCaseResponse> {
    const checkSaleExist = await this.saleRepositpry.findById(id)

    if (!checkSaleExist) {
      throw new CheckSaleExist()
    }

    const sale = await this.saleRepositpry.delete(checkSaleExist.id)

    return {
      sale,
    }
  }
}
