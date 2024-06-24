import { UsersRository } from '@/repositories/users-repositorry'
import { CheckUserExist } from '../errors/check-user-exist'

interface DeleteUserUseCaseRequest {
  id: string
}

interface DeleteUserUseCaseResponse {
  user: null
}

export class DeleteUserUseCase {
  constructor(private userRepository: UsersRository) {}

  async execute({
    id,
  }: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse> {
    const checkUserExist = await this.userRepository.findById(id)

    if (!checkUserExist) {
      throw new CheckUserExist()
    }

    const user = await this.userRepository.delete(checkUserExist.id)

    return {
      user,
    }
  }
}
