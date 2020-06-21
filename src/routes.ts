import express, { Request, Response } from 'express'
import { User } from './models/User'
import { getRepository } from 'typeorm'
import { UserController } from '@controllers/UserController'
const routes = express.Router()

const userController = new UserController()
routes.get('/users', userController.index)

routes.get('/users/:id', userController.show)

routes.post('/users', userController.create)

routes.put('/users/:id', userController.update)

routes.delete('/users/:id', userController.delete)
module.exports = routes