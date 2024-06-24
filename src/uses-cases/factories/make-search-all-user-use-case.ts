import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { SearchAllUseCase } from '../users/search-all'

export function makeSearchAllUserUseCase() {
  const userRepository = new PrismaUsersRepository()
  const makeSearchAllUsersUseUseCase = new SearchAllUseCase(userRepository)

  return makeSearchAllUsersUseUseCase
}
