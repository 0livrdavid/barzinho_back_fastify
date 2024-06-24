import { makeUpdateSaleUseCase } from '@/uses-cases/factories/make-update-sale-use-case'
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { CheckSaleExist } from '@/uses-cases/errors/check-sale-existe'

export async function updateSale(request: FastifyRequest, reply: FastifyReply) {
  const paramsSale = z.object({
    id: z.string(),
  })

  try {
    const { id } = paramsSale.parse(request.params)

    await makeUpdateSaleUseCase().execute({
      id,
      userId: request.user.sub,
    })

    return reply.status(200).send({
      success: true,
      message: 'Venda atualizado com sucesso',
    })
  } catch (err) {
    if (err instanceof CheckSaleExist) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }
}
