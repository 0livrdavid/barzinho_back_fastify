import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { routes } from './http'
import fastifyJwt from '@fastify/jwt'
import fastifycookie from '@fastify/cookie'
import cors from '@fastify/cors'

export const app = fastify()

app.register(cors, {
  origin: 'http://localhost:3000',
})

app.register(fastifySwagger, {
  openapi: {
    openapi: '3.0.0',
    info: {
      title: 'Test swagger',
      description: 'Testing the Fastify swagger API',
      version: '0.1.0',
    },
    servers: [
      {
        url: 'http://localhost:3333',
        description: 'Development server',
      },
    ],
    tags: [
      { name: 'user', description: 'User related end-points' },
      { name: 'product', description: 'Product related end-points' },
      { name: 'sale', description: 'Sale related end-points' },
      { name: 'product-sale', description: 'Product-Sale related end-points' },
    ],
    components: {
      securitySchemes: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header',
        },
      },
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
  },
})

app.register(fastifySwaggerUi, {
  routePrefix: '/documentation',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
  uiHooks: {
    onRequest: function (request, reply, next) {
      next()
    },
    preHandler: function (request, reply, next) {
      next()
    },
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject) => {
    return swaggerObject
  },
  transformSpecificationClone: true,
})

app.register(fastifyJwt, {
  secret: env.JWT,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m', // 10 minutos
  },
})

app.register(fastifycookie)

app.register(routes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO:
  }

  return reply.status(500).send({ message: 'Internal server Error' })
})
