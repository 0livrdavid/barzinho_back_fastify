import { makeDeleteUserUseCase } from '@/uses-cases/factories/make-delete-user-use-case'
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { CheckUserExist } from '@/uses-cases/errors/check-user-exist'

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
  const requestParams = z.object({
    id: z.string(),
  })

  try {
    const { id } = requestParams.parse(request.params)
    await makeDeleteUserUseCase().execute({
      id,
    })

    return reply
      .status(200)
      .send({ success: true, message: 'Usuário deletado com sucesso!' })
  } catch (err) {
    if (err instanceof CheckUserExist) {
      return reply.status(409).send({ success: false, message: err.message })
    }

    throw err
  }
}
