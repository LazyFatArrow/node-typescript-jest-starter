import { Router } from 'express'
import { handleGetProducts } from './handlers'

export const productsRouter = (): Router => {
  const router = Router()

  router.get('/products', handleGetProducts)

  return router
}