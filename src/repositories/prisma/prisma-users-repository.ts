import { Prisma } from '@prisma/client'
import { UsersRository } from '../users-repositorry'
import { prisma } from '@/lib/prisma'

export class PrismaUsersRepository implements UsersRository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }

  async search() {
    const user = await prisma.user.findMany()

    return user
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data,
    })

    return user
  }

  async delete(id: string) {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        deleted_at: new Date(),
      },
    })

    return null
  }

  async authenticate(number: string) {
    const user = prisma.user.findUnique({
      where: {
        number,
      },
    })

    return user
  }

  async reports() {} // consulta para relatorios
}
