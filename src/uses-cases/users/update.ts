import { UsersRository } from '@/repositories/users-repositorry'
import { User } from '@prisma/client'
import { CheckUserExist } from '../errors/check-user-exist'

interface UpdateUserUseCaseRequest {
  id: string
  name: string
  number: string
  age: number
  valor_reservado_caixa: number
}

interface UpdateUserUseCaseResponse {
  user: User
}

export class UpdateUseCase {
  constructor(private userRepository: UsersRository) {}

  async execute({
    id,
    name,
    number,
    age,
    valor_reservado_caixa,
  }: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {
    const checkUserExist = await this.userRepository.findById(id)

    if (!checkUserExist) {
      throw new CheckUserExist()
    }

    const user = await this.userRepository.update(checkUserExist.id, {
      name,
      number,
      age,
      valor_reservado_caixa,
    })

    return {
      user,
    }
  }
}
