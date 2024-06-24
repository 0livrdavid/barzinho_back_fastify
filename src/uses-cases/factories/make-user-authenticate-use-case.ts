import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticateUseCase } from '../auth/authenticate'

export function makeAuthenticateUserUseCase() {
  const userRepository = new PrismaUsersRepository()
  const makeAuthenticate = new AuthenticateUseCase(userRepository)

  return makeAuthenticate
}
