import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UserUseCase } from '../users/create'

export function makeCreateUserUseCase() {
  const userRepository = new PrismaUsersRepository()
  const makeCreateUserUseCase = new UserUseCase(userRepository)

  return makeCreateUserUseCase
}
