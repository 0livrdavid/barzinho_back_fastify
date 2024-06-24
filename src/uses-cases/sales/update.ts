import { SalesRository } from '@/repositories/sales-repository'
import { Sale } from '@prisma/client'
import { CheckSaleExist } from '../errors/check-sale-existe'

interface UpdateSaleUseCaseRequest {
  id: string
  userId: string
}

interface UpdateSaleUseCaseResponse {
  sale: Sale
}

export class UpdateSaleUseCase {
  constructor(private saleRepositpry: SalesRository) {}

  async execute({
    id,
    userId,
  }: UpdateSaleUseCaseRequest): Promise<UpdateSaleUseCaseResponse> {
    const checkSaleExist = await this.saleRepositpry.findById(id)

    if (!checkSaleExist) {
      throw new CheckSaleExist()
    }

    const sale = await this.saleRepositpry.update(checkSaleExist.id, {
      user_id: userId,
    })

    return {
      sale,
    }
  }
}
