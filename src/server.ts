import express from 'express'
import * as bodyParser from 'body-parser'
import { createConnection } from 'typeorm'
import routes from './routes'
import session from 'express-session'

require('dotenv').config()

createConnection()

const app = express()
app.use(bodyParser.json())
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

// register routes
// app.use(auth.Store)
app.use(routes)
app.listen(3000)
