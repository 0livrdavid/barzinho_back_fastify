import { UsersRository } from '@/repositories/users-repositorry'
import { User } from '@prisma/client'
import { hash } from 'bcryptjs'

interface UserUseCaseRequest {
  name: string
  number: string
  password: string
  age: number
  valor_reservado_caixa: number
}

interface UserUseCaseResponse {
  user: User
}

export class UserUseCase {
  constructor(private userRepository: UsersRository) {}

  async execute({
    name,
    number,
    password,
    age,
    valor_reservado_caixa,
  }: UserUseCaseRequest): Promise<UserUseCaseResponse> {
    const password_hash = await hash(password, 8)

    const user = await this.userRepository.create({
      name,
      number,
      password: password_hash,
      age,
      valor_reservado_caixa,
    })

    return {
      user,
    }
  }
}
