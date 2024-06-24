import { makeDeleteSaleUseCase } from '@/uses-cases/factories/make-delete-sale-use-case'
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { CheckSaleExist } from '@/uses-cases/errors/check-sale-existe'

export async function deleteSale(request: FastifyRequest, reply: FastifyReply) {
  const paramsSale = z.object({
    id: z.string(),
  })

  try {
    const { id } = paramsSale.parse(request.params)

    await makeDeleteSaleUseCase().execute({
      id,
    })

    return reply.status(200).send()
  } catch (err) {
    if (err instanceof CheckSaleExist) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }
}
