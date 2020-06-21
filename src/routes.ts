import express from 'express'
import { UserController } from '@controllers/UserController'
import { SessionController } from '@controllers/SessionController'
import { Auth } from './config/auth'
const routes = express.Router()

const userController = new UserController()
const sessionController = new SessionController()
const auth = new Auth()

routes.get('/users', userController.index)

routes.get('/users/:id', userController.show)

routes.post('/users', userController.create)

routes.put('/users/:id', userController.update)

routes.delete('/users/:id', userController.delete)

routes.post('/login', sessionController.store)

routes.use(auth.Store)

routes.get('/users/:id', userController.show)
module.exports = routes
