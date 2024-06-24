import { UsersRository } from '@/repositories/users-repositorry'
import { User } from '@prisma/client'
import { compare } from 'bcryptjs'
import { InvalidCrendentialsError } from '../errors/authenticate'

interface AuthenticateUseCaseRequest {
  number: string
  password_hash: string
}

interface AuthenticateUseCaseResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(private userRepository: UsersRository) {}

  async execute({
    number,
    password_hash,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.userRepository.authenticate(number)

    if (!user) {
      throw new InvalidCrendentialsError()
    }

    const doesPasswordMatch = await compare(password_hash, user.password)

    if (!doesPasswordMatch) {
      throw new InvalidCrendentialsError()
    }

    return {
      user,
    }
  }
}
