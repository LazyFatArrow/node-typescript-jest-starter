import { Request, Response } from 'express'
import { findProducts } from './products'

export const handleGetProducts = (request: Request, response: Response): Response => {
  return response.json(findProducts())
}