import { makeCreateUserUseCase } from '@/uses-cases/factories/make-create-user-use-case'
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    name: z.string(),
    number: z.string(),
    password_hash: z.string(),
    age: z.number(),
    valor_reservado_caixa: z.number(),
  })

  const { name, number, password_hash, age, valor_reservado_caixa } =
    createBodySchema.parse(request.body)

  const createUserUseCase = makeCreateUserUseCase()

  await createUserUseCase.execute({
    name,
    number,
    password: password_hash,
    age,
    valor_reservado_caixa,
  })

  return reply.status(201).send({
    success: true,
    message: 'Usuário cadastrado com sucesso',
  })
}
