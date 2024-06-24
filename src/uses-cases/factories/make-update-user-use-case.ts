import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UpdateUseCase } from '../users/update'

export function makeUpdateUserUseCase() {
  const userRepository = new PrismaUsersRepository()
  const makeUpdateUsersUseUseCase = new UpdateUseCase(userRepository)

  return makeUpdateUsersUseUseCase
}
