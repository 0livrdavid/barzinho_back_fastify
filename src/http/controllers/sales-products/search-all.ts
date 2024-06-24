import { makeSearchAllSalesProductUseCase } from '@/uses-cases/factories/make-search-all-sale-product-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function searchAllProductSale(
  _: FastifyRequest,
  reply: FastifyReply,
) {
  const salesProducts = await makeSearchAllSalesProductUseCase().execute()

  return reply.status(200).send({ content: salesProducts })
}
