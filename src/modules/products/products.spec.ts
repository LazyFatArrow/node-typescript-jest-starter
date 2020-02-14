import { findProducts } from './products'
import { Product } from './types/Product'
import * as lowdb from 'lowdb'
import * as FileSync from 'lowdb/adapters/FileSync'

jest.mock('lowdb', () => {
  return () => ({
    get: jest.fn().mockReturnValue({
      value: () => ([])
    })
  })
})

jest.mock('lowdb/adapters/FileSync', () => {
  return function() {}
})

describe('products', () => {
  it('findProducts should return all products', () => {
    expect(findProducts()).toEqual([])
  })
})