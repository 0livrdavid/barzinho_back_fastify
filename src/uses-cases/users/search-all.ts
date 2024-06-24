import { UsersRository } from '@/repositories/users-repositorry'
import { User } from '@prisma/client'

interface SearchAllUsersUseCase {
  users: User[]
}

export class SearchAllUseCase {
  constructor(private userRepository: UsersRository) {}

  async execute(): Promise<SearchAllUsersUseCase> {
    const users = await this.userRepository.search()

    return {
      users,
    }
  }
}
