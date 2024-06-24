import { makeDeleteSaleProductUseCase } from '@/uses-cases/factories/make-delete-sale-product-use-case'
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { CheckSaleProductExist } from '@/uses-cases/errors/check-sale-product-exist'

export async function deleteProductSale(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const paramsSale = z.object({
    id: z.string(),
  })

  try {
    const { id } = paramsSale.parse(request.params)

    await makeDeleteSaleProductUseCase().execute({
      id,
    })

    return reply.status(200).send()
  } catch (err) {
    if (err instanceof CheckSaleProductExist) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }
}
