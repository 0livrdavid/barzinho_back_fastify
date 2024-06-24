import { Prisma } from '@prisma/client'
import { ProductsRository } from '../products-repository'
import { prisma } from '@/lib/prisma'

export class PrismaProductsRepository implements ProductsRository {
  async create(data: Prisma.ProductsCreateInput) {
    const product = await prisma.products.create({
      data,
    })

    return product
  }

  async search() {
    const product = await prisma.products.findMany({})

    return product
  }

  async findById(id: string) {
    const product = await prisma.products.findUnique({
      where: {
        id,
      },
    })

    return product
  }

  async update(id: string, data: Prisma.ProductsUpdateInput) {
    const product = await prisma.products.update({
      where: {
        id,
      },
      data,
    })

    return product
  }

  async delete(id: string) {
    await prisma.products.delete({
      where: {
        id,
      },
    })

    return null
  }
}
