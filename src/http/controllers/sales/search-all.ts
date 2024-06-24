import { makeSearchAllUseCase } from '@/uses-cases/factories/make-search-all-sale-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function searchAllSale(_: FastifyRequest, reply: FastifyReply) {
  const sales = await makeSearchAllUseCase().execute()

  return reply.status(200).send({ content: sales })
}
