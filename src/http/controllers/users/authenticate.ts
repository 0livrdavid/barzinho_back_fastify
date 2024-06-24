import { InvalidCrendentialsError } from '@/uses-cases/errors/authenticate'
import { makeAuthenticateUserUseCase } from '@/uses-cases/factories/make-user-authenticate-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const bodyAuthenticateSchema = z.object({
    number: z.string(),
    password_hash: z.string(),
  })

  const { number, password_hash } = bodyAuthenticateSchema.parse(request.body)

  try {
    const makeAuthenticate = makeAuthenticateUserUseCase()
    const { user } = await makeAuthenticate.execute({
      number,
      password_hash,
    })

    const token = await reply.jwtSign(
      {},
      {
        sign: {
          sub: user.id,
          expiresIn: '7d',
        },
      },
    )

    return reply
      .setCookie('token', token, {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
      .status(200)
      .send({
        success: true,
        message: 'Autenticação realizada com sucesso',
        data: {
          token,
          user: {
            ...user,
            password: undefined,
          },
        },
      })
  } catch (error) {
    if (error instanceof InvalidCrendentialsError) {
      return reply.status(401).send({
        success: false,
        message: error.message,
        data: null,
      })
    }
  }
}
