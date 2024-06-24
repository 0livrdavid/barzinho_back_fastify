import { makeUpdateProductUseCase } from '@/uses-cases/factories/make-update-product-use-case'
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { CheckProductExist } from '@/uses-cases/errors/check-product-exist'

export async function updateProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    valor: z.number(),
  })

  const updateParams = z.object({
    id: z.string(),
  })

  try {
    const { id } = updateParams.parse(request.params)

    const { name, description, valor } = updateBodySchema.parse(request.body)

    const updateProductUseCase = makeUpdateProductUseCase()

    await updateProductUseCase.execute({
      id,
      name,
      description,
      valor,
    })

    return reply.status(200).send()
  } catch (err) {
    if (err instanceof CheckProductExist) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }
}
