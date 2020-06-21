import express from 'express'
import * as bodyParser from 'body-parser'
import { createConnection } from 'typeorm'
import routes from './routes'
require('dotenv').config()

createConnection().then(connection => {
  // create and setup express app
  const app = express()
  app.use(bodyParser.json())

  // register routes

  app.use(routes)
  app.listen(3000)
})
