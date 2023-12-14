import { Request, Response } from "express"

export const notFound= (req:Request, res:Response) => {
    res.status(404).send({
      success:true,
      message:`Route not Found for ${req.originalUrl}`
    })
  }
