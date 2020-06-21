import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import { Request, Response, NextFunction } from 'express'

export const Auth = async (req: Request, res : Response, next:NextFunction) => {
  const authHeader = req!.headers!.token

  if (!authHeader) {
    console.log(`oi ${authHeader}`)
    // return res.status(401).redirect('/login')
    return res.status(401).json({ message: 'Token ivalid' })
  }

  // const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(authHeader, process.env.APP_SECRET)

    req.userId = decoded.id
    return next()
  } catch (err) {
    return res.status(401).json({ message: 'Token ivalid' })
  }
}
