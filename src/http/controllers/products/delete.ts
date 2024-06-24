import { makeDeleteProductUseCase } from '@/uses-cases/factories/make-delete-product-use-case'
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { CheckProductExist } from '@/uses-cases/errors/check-product-exist'

export async function deleteProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const paramsDelete = z.object({
    id: z.string(),
  })

  try {
    const { id } = paramsDelete.parse(request.params)

    await makeDeleteProductUseCase().execute({ id })
  } catch (err) {
    if (err instanceof CheckProductExist) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }
}
