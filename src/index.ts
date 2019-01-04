import * as express from 'express'
import * as bodyParser from 'body-parser'

import MoviesApi from './api/MoviesApi'

const app = express()
const moviesApi = new MoviesApi()

app.use(bodyParser.json())

app.post('/movies', (req: express.Request, res: express.Response) => {
  res.json(moviesApi.create(req.body))
})

app.get('/movies', (req: express.Request, res: express.Response) => {
  res.json(moviesApi.findMany())
})

app.listen(5000, () => {
  console.log('server started on port 5000')
})