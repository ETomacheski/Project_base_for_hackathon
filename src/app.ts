import express from 'express'
import * as bodyParser from 'body-parser'
import { createConnection } from 'typeorm'
import routes from './routes'
import session from 'express-session'
import { Auth } from './config/auth'
require('dotenv').config()

createConnection()

const app = express()
app.use(bodyParser.json())
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

// console.log(app.use(Auth))
app.use(routes)

export default app
