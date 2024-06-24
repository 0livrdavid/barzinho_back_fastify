import { FastifyRequest, FastifyReply } from 'fastify'

export async function reports(_: FastifyRequest, reply: FastifyReply) {
  return reply.status(200).send()
}
