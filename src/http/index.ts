import { FastifyInstance } from 'fastify'
import { usersRoutes } from './controllers/users/routes'
import { productsRoutes } from './controllers/products/routes'
import { salesRoutes } from './controllers/sales/routes'
import { productSaleRoutes } from './controllers/sales-products/routes'

export async function routes(app: FastifyInstance) {
  app.register(usersRoutes)
  app.register(productsRoutes)
  app.register(salesRoutes)
  app.register(productSaleRoutes)
}
