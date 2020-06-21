import express from 'express'
import { UserController } from '@controllers/UserController'
import { SessionController } from '@controllers/SessionController'
const routes = express.Router()

const userController = new UserController()
const sessionController = new SessionController()

routes.get('/users', userController.index)

routes.get('/users/:id', userController.show)

routes.post('/users', userController.create)

routes.put('/users/:id', userController.update)

routes.delete('/users/:id', userController.delete)

routes.post('/login', sessionController.store)
module.exports = routes
