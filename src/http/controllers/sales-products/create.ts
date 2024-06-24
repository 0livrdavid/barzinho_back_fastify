import { makeCreateSaleProductUseCase } from '@/uses-cases/factories/make-create-sale-product-use-case'
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function createSaleProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createBodySchema = z.object({
    quantity: z.number(),
    productId: z.string(),
    saleId: z.string(),
  })

  const { quantity, productId, saleId } = createBodySchema.parse(request.body)

  await makeCreateSaleProductUseCase().execute({
    quantity,
    productId,
    saleId,
  })

  return reply.status(201).send()
}
