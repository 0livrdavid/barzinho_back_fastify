import { FastifyInstance } from 'fastify'
import { createSale } from './create'
import { searchAllSale } from './search-all'
import { deleteSale } from './delete'
import { updateSale } from './update'

export async function salesRoutes(app: FastifyInstance) {
  app.post(
    '/sale',
    {
      schema: {
        summary: 'Create a new sale ',
        tags: ['sale'],
        body: {
          type: 'object',
          // response: {
          //   201: {
          //     description: 'Sale cadastrado com sucesso',
          //     type: 'object',
          //     properties: {
          //       success: { type: 'boolean' },
          //       message: { type: 'string' },
          //     },
          //   },
          // },
        },
      },
    },
    createSale,
  )

  app.get(
    '/sales',
    {
      schema: {
        summary: 'Get all sales',
        tags: ['sale'],
        // response: {
        //   200: {
        //     description: 'List of users',
        //     type: 'array',
        //     items: {
        //       type: 'object',
        //       properties: {
        //         created_at: { type: 'number' },
        //         user_id: { type: 'string' },
        //       },
        //     },
        //   },
        // },
      },
    },
    searchAllSale,
  )

  app.put(
    '/sale/:id',
    {
      schema: {
        summary: 'Updated sale',
        tags: ['sale'],
        body: {
          type: 'object',
          // response: {
          //   201: {
          //     description: 'User updated successfully',
          //     type: 'object',
          //     properties: {
          //       success: { type: 'boolean' },
          //       message: { type: 'string' },
          //     },
          //   },
          // },
        },
      },
    },
    updateSale,
  )

  app.delete(
    '/sale/:id',
    {
      schema: {
        summary: 'Delete sale by ID',
        tags: ['sale'],
        params: {
          type: 'object',
          required: ['id'],
          properties: {
            id: { type: 'string', description: 'Product ID' },
          },
        },
      },
    },
    deleteSale,
  )
}
