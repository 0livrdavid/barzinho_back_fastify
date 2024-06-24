import { SalesProductsRepository } from '../sale-products-repository'
import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'

export class PrismaSalesProductsRepository implements SalesProductsRepository {
  async create(data: Prisma.SalesProductsUncheckedCreateInput) {
    const saleProduct = await prisma.salesProducts.create({
      data,
    })

    return saleProduct
  }

  async search() {
    const salesProducts = await prisma.salesProducts.findMany({})

    return salesProducts
  }

  async findById(id: string) {
    const saleProduct = await prisma.salesProducts.findUnique({
      where: {
        id,
      },
    })

    return saleProduct
  }

  async update(id: string, data: Prisma.SalesProductsUncheckedUpdateInput) {
    const saleProduct = await prisma.salesProducts.update({
      where: {
        id,
      },
      data,
    })

    return saleProduct
  }

  async delete(id: string) {
    await prisma.salesProducts.delete({
      where: {
        id,
      },
    })

    return null
  }
}
