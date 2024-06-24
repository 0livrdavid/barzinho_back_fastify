import { Prisma, SalesProducts } from '@prisma/client'

export interface SalesProductsRepository {
  create(data: Prisma.SalesProductsUncheckedCreateInput): Promise<SalesProducts>
  search(): Promise<SalesProducts[]>
  findById(id: string): Promise<SalesProducts | null>
  update(
    id: string,
    data: Prisma.SalesProductsUncheckedUpdateInput,
  ): Promise<SalesProducts>
  delete(id: string): Promise<null>
}
