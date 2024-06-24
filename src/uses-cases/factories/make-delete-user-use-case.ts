import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { DeleteUserUseCase } from '../users/delete'

export function makeDeleteUserUseCase() {
  const userRepository = new PrismaUsersRepository()
  const makeDeleteUserUseUseCase = new DeleteUserUseCase(userRepository)

  return makeDeleteUserUseUseCase
}
