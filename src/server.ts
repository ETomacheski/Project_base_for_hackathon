import express, { Request, Response } from 'express'
import * as bodyParser from 'body-parser'
import { createConnection } from 'typeorm'
import Routes from './routes'
// create typeorm connection
createConnection().then(connection => {
  // create and setup express app
  const app = express()
  app.use(bodyParser.json())

  // register routes

  app.use(Routes)
  app.listen(3000)
})
