import { Prisma, Sale } from '@prisma/client'

export interface SalesRository {
  create(data: Prisma.SaleUncheckedCreateInput): Promise<Sale>
  search(): Promise<Sale[]>
  findById(id: string): Promise<Sale | null>
  update(id: string, data: Prisma.SaleUncheckedUpdateInput): Promise<Sale>
  delete(id: string): Promise<null>
}
