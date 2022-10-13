import { Request, Response } from "express"
import connection from "../database/connection"

export const getProductByTag = async (req: Request, res: Response) => {
  const tag = req.params.tag
  const result = await connection.select('*').from('Products').where({tag})
  res.status(200).send(result)
}