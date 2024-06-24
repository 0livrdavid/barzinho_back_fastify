import { searchAllProducts } from './search-all'
import { FastifyInstance } from 'fastify'
import { createProduct } from './create'
import { updateProduct } from './update'
import { deleteProduct } from './delete'

export async function productsRoutes(app: FastifyInstance) {
  app.post(
    '/products',
    {
      schema: {
        summary: 'Create a new product ',
        tags: ['product'],
        body: {
          type: 'object',
          required: ['name', 'description', 'valor'],
          properties: {
            name: { type: 'string' },
            description: { type: 'string' },
            buyValue: { type: 'number' },
            sellValue: { type: 'number' },
          },
        },
        response: {
          201: {
            description: 'Produto cadastrado com sucesso',
            type: 'object',
            properties: {
              success: { type: 'boolean' },
              message: { type: 'string' },
            },
          },
        },
      },
    },
    createProduct,
  )

  app.get(
    '/product',
    {
      schema: {
        summary: 'Get all products',
        tags: ['product'],
        response: {
          200: {
            description: 'List of users',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                description: { type: 'string' },
                valor: { type: 'string' },
              },
            },
          },
        },
      },
    },
    searchAllProducts,
  )

  app.put(
    '/pruduct/:id',
    {
      schema: {
        summary: 'Updated user',
        tags: ['product'],
        body: {
          type: 'object',
          required: ['name', 'description', 'valor'],
          properties: {
            name: { type: 'string' },
            description: { type: 'string' },
            valor: { type: 'string' },
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
    updateProduct,
  )

  app.delete(
    '/pruduct/:id',
    {
      schema: {
        summary: 'Delete product by ID',
        tags: ['product'],
        params: {
          type: 'object',
          required: ['id'],
          properties: {
            id: { type: 'string', description: 'Product ID' },
          },
        },
      },
    },
    deleteProduct,
  )
}
