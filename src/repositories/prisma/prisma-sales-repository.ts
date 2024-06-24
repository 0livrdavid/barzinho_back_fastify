import { prisma } from '@/lib/prisma'
import { SalesRository } from '../sales-repository'
import { Prisma } from '@prisma/client'

export class PrismaSalesRepository implements SalesRository {
  async create(data: Prisma.SaleUncheckedCreateInput) {
    const sale = await prisma.sale.create({
      data,
    })

    return sale
  }

  async search() {
    const sale = await prisma.sale.findMany({})

    return sale
  }

  async findById(id: string) {
    const sale = await prisma.sale.findUnique({
      where: {
        id,
      },
    })

    return sale
  }

  async update(id: string, data: Prisma.SaleUncheckedUpdateInput) {
    const sale = await prisma.sale.update({
      where: {
        id,
      },
      data,
    })

    return sale
  }

  async delete(id: string) {
    await prisma.sale.delete({
      where: {
        id,
      },
    })

    return null
  }
}
