import { Product } from './types/Product'
import * as lowdb from 'lowdb'
import * as FileSync from 'lowdb/adapters/FileSync'
import * as path from 'path'

const adapter = new FileSync(path.resolve(__dirname, 'products.db.json'))
const db = lowdb(adapter)

export const findProducts = (): Product[] => {
  return db.get('products').value()
}