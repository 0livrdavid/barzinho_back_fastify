import { makeUpdateUserUseCase } from '@/uses-cases/factories/make-update-user-use-case'
import { CheckUserExist } from '@/uses-cases/errors/check-user-exist'
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateBodySchema = z.object({
    name: z.string(),
    number: z.string(),
    age: z.number(),
    valor_reservado_caixa: z.number(),
  })

  const updateParams = z.object({
    id: z.string(),
  })

  try {
    const { id } = updateParams.parse(request.params)

    const { name, number, age, valor_reservado_caixa } = updateBodySchema.parse(
      request.body,
    )

    const updateUserUseCase = makeUpdateUserUseCase()

    await updateUserUseCase.execute({
      id,
      name,
      number,
      age,
      valor_reservado_caixa,
    })

    return reply
      .status(200)
      .send({ success: true, message: 'Usuário atualizado com sucesso!' })
  } catch (err) {
    if (err instanceof CheckUserExist) {
      return reply.status(404).send({ success: false, message: err.message })
    }

    throw err
  }
}
