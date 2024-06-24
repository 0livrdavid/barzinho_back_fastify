import { makeSearchAllUserUseCase } from '@/uses-cases/factories/make-search-all-user-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function searchAll(_: FastifyRequest, reply: FastifyReply) {
  const { users } = await makeSearchAllUserUseCase().execute()

  return reply.status(200).send(users)
}
