import { FastifyInstance } from 'fastify'
import { createSaleProduct } from './create'
import { searchAllProductSale } from './search-all'
import { updateProductSale } from './update'
import { deleteProductSale } from './delete'

export async function productSaleRoutes(app: FastifyInstance) {
  app.post(
    '/products-sales',
    {
      schema: {
        summary: 'Authenticate a user',
        tags: ['product-sale'],
        body: {
          type: 'object',
          required: ['number', 'password_hash'],
          properties: {
            quantity: { type: 'number' },
            sale_id: { type: 'string' },
            product_id: { type: 'string' },
          },
        },
        // response: {
        //   200: {
        //     description: 'User created successfully',
        //     type: 'object',
        //     properties: {
        //       success: { type: 'boolean' },
        //       message: { type: 'string' },
        //     },
        //   },
        // },
      },
    },
    createSaleProduct,
  )

  app.get(
    '/products-sales',
    {
      schema: {
        summary: 'Get all product-sale',
        tags: ['product-sale'],
        // response: {
        //   200: {
        //     description: 'List of product-sale',
        //     type: 'array',
        //     items: {
        //       type: 'object',
        //       properties: {
        //         quantity: { type: 'number' },
        //         sale_id: { type: 'string' },
        //         product_id: { type: 'string' },
        //       },
        //     },
        //   },
        // },
      },
    },
    searchAllProductSale,
  )

  app.put(
    '/product-sale/:id',
    {
      schema: {
        summary: 'Updated product-sale',
        tags: ['product-sale'],
        body: {
          type: 'object',
          // response: {
          //   201: {
          //     description: 'User updated successfully',
          //     type: 'object',
          //     properties: {
          //       quantity: { type: 'number' },
          //       sale_id: { type: 'string' },
          //       product_id: { type: 'string' },
          //     },
          //   },
          // },
        },
      },
    },
    updateProductSale,
  )

  app.delete(
    '/product-sale/:id',
    {
      schema: {
        summary: 'Delete product-sale by ID',
        tags: ['product-sale'],
        params: {
          type: 'object',
          required: ['id'],
          properties: {
            id: { type: 'string', description: 'Sale-Product ID' },
          },
        },
      },
    },
    deleteProductSale,
  )
}
