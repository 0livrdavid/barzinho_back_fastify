import { Prisma, Products } from '@prisma/client'

export interface ProductsRository {
  create(data: Prisma.ProductsCreateInput): Promise<Products>
  search(): Promise<Products[]>
  findById(id: string): Promise<Products | null>
  update(id: string, data: Prisma.ProductsUpdateInput): Promise<Products>
  delete(id: string): Promise<null>
}
