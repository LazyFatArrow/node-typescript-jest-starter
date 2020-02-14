import { findProducts } from './products'
import { Product } from './types/Product'

jest.mock('./products.ts', () => ({
  findProducts: jest.fn(),
}))

const product: Product = new Product('samsumg', 999)

describe('products', () => {
  beforeAll(() => {
    (findProducts as jest.Mock).mockReturnValue([ product ])
  })

  it('findProducts should return all products', () => {
    // a really useless test
    findProducts()

    expect(findProducts).toHaveReturnedWith([ product ])
  })
})