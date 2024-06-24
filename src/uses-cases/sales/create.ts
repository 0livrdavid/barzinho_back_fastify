import { SalesRository } from '@/repositories/sales-repository'
import { Sale } from '@prisma/client'

interface CreateSaleUseCaseRequest {
  userId: string
}

interface CreateSaleUseCaseResponse {
  sale: Sale
}

export class CreateSaleUseCase {
  constructor(private saleRepositpry: SalesRository) {}

  async execute({
    userId,
  }: CreateSaleUseCaseRequest): Promise<CreateSaleUseCaseResponse> {
    const sale = await this.saleRepositpry.create({
      user_id: userId,
    })

    return {
      sale,
    }
  }
}
