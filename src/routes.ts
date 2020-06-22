import express, { Router } from 'express'
import { UserController } from '@controllers/UserController'
import { SessionController } from '@controllers/SessionController'
import { Auth } from './config/auth'

const routes = Router()

const userController = new UserController()
const sessionController = new SessionController()

routes.get('/users', userController.index)

routes.get('/users/:id', userController.show)

routes.post('/users', userController.create)

routes.put('/users/:id', userController.update)

routes.delete('/users/:id', userController.delete)

routes.post('/login', sessionController.store)

// app.use(Auth)

routes.get('/users/:id', userController.show)
export default routes
