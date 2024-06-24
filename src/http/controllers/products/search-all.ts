import { makeSearchAllProductUseCase } from '@/uses-cases/factories/make-search-all-product-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function searchAllProducts(
  _: FastifyRequest,
  reply: FastifyReply,
) {
  const products = await makeSearchAllProductUseCase().execute()

  return reply.status(200).send({ content: products })
}
