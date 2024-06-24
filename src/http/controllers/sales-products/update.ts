import { makeUpdateSaleProductUseCase } from '@/uses-cases/factories/make-update-sale-product-use-case'
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { CheckSaleProductExist } from '@/uses-cases/errors/check-sale-product-exist'

export async function updateProductSale(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateBodySchema = z.object({
    quantity: z.number(),
    productId: z.string(),
    saleId: z.string(),
  })

  const paramsSaleProduct = z.object({
    id: z.string(),
  })

  try {
    const { quantity, productId, saleId } = updateBodySchema.parse(request.body)

    const { id } = paramsSaleProduct.parse(request.params)

    await makeUpdateSaleProductUseCase().execute({
      id,
      quantity,
      productId,
      saleId,
    })

    return reply.status(200).send()
  } catch (err) {
    if (err instanceof CheckSaleProductExist) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }
}
