import 'module-alias/register'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import { productsRouter } from './modules/products'

const app = express()

app.use(bodyParser.json())

app.use('/products', productsRouter())
app.get('/', (req, res) => {
  return res.send('Hello there.')
})

const boot = (): void => {
  app.listen(5000, () => {
    console.log('server started')
  })
}

boot()