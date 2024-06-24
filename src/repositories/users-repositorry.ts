import { Prisma, User } from '@prisma/client'

export interface UsersRository {
  create(data: Prisma.UserCreateInput): Promise<User>
  search(): Promise<User[]>
  findById(id: string): Promise<User | null>
  update(id: string, data: Prisma.UserUpdateInput): Promise<User>
  delete(id: string): Promise<null>
  authenticate(number: string): Promise<User | null>
}
