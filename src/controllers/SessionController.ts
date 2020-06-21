import jwt from 'jsonwebtoken'
import { User } from '@models/User'
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

export class SessionController {
  async store (req: Request, res: Response) {
    const { email, password } = req.body
    const user = await getRepository(User).findOne({ email: email })
    console.log(email)
    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }
    // if (!(await bacrypt.compare(password, user.password))) {
    //   return res.status(401).json({ message: 'Incorect password' })
    // }
    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' })
    }

    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET)
    var id = user.id
    req.session.token = token
    req.session.user_id = id
    res.json(token)
  }
}
