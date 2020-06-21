import { User } from '@models/User'
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

export class UserController {
  async index (req: Request, res: Response) {
    const users = await getRepository(User).find()
    res.json(users)
  }

  async show (req: Request, res: Response) {
    const results = await getRepository(User).findOne(req.params.id)
    return res.send(results)
  }

  async create (req: Request, res: Response) {
    const user = await getRepository(User).create(req.body)
    const results = await getRepository(User).save(user)
    return res.send(results)
  }

  async update (req: Request, res: Response) {
    const user = await getRepository(User).findOne(req.params.id)
    getRepository(User).merge(user, req.body)
    const results = await getRepository(User).save(user)
    return res.send(results)
  }

  async delete (req: Request, res: Response) {
    const results = await getRepository(User).delete(req.params.id)
    return res.send(results)
  }
}
