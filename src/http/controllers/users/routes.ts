import { searchAll } from './search-all'
import { FastifyInstance } from 'fastify'
import { create } from './create'
import { deleteUser } from './delete'
import { authenticate } from './authenticate'
import { update } from './update'
import { reports } from './reports'

export async function usersRoutes(app: FastifyInstance) {
  app.get('/reports', reports)

  app.post(
    '/authenticate',
    {
      schema: {
        summary: 'Authenticate a user',
        tags: ['user'],
        body: {
          type: 'object',
          required: ['number', 'password_hash'],
          properties: {
            number: { type: 'string' },
            password_hash: { type: 'string' },
          },
        },
      },
    },
    authenticate,
  )

  app.post(
    '/users',
    {
      schema: {
        summary: 'Create a new user',
        tags: ['user'],
        body: {
          type: 'object',
          required: ['name', 'number', 'age', 'valor_reservado_caixa'],
          properties: {
            name: { type: 'string' },
            number: { type: 'string' },
            password_hash: { type: 'string' },
            age: { type: 'integer' },
            valor_reservado_caixa: { type: 'number' },
          },
        },
        response: {
          201: {
            description: 'User created successfully',
            type: 'object',
            properties: {
              success: { type: 'boolean' },
              message: { type: 'string' },
            },
          },
        },
      },
    },
    create,
  )

  app.get(
    '/users',
    {
      schema: {
        summary: 'Get all users',
        tags: ['user'],
        response: {
          200: {
            description: 'List of users',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                number: { type: 'string' },
                age: { type: 'number' },
                valor_reservado_caixa: { type: 'number' },
                deleted_at: { type: 'string' },
              },
            },
          },
        },
      },
    },
    searchAll,
  )

  app.put(
    '/users/:id',
    {
      schema: {
        summary: 'Updated user',
        tags: ['user'],
        body: {
          type: 'object',
          required: ['name', 'number', 'age', 'valor_reservado_caixa'],
          properties: {
            name: { type: 'string' },
            number: { type: 'string' },
            age: { type: 'integer' },
            valor_reservado_caixa: { type: 'number' },
          },
        },
        response: {
          201: {
            description: 'User updated successfully',
            type: 'object',
            properties: {
              success: { type: 'boolean' },
              message: { type: 'string' },
            },
          },
        },
      },
    },
    update,
  )

  app.delete(
    '/users/:id',
    {
      schema: {
        summary: 'Delete user by ID',
        tags: ['user'],
        params: {
          type: 'object',
          required: ['id'],
          properties: {
            id: { type: 'string', description: 'User ID' },
          },
        },
      },
    },
    deleteUser,
  )
}
