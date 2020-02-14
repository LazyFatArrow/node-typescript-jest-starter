import { Product } from './types/Product'

const products: Product[] = [
  new Product('ifon', 999999),
  new Product('hammer', 3),
]

export const findProducts = (): Product[] => {
  return products
}