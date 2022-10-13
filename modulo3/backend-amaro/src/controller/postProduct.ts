import { Request, Response } from "express";
import { createProduct } from "../services/createProduct";

export const postProduct = async (req: Request, res: Response) => {
    try{
        const {id, name, tag, url} = req.body
        await createProduct(id, name, tag, url)
        res.status(201).send("Produto inserido com sucesso!")
    }catch(erro: any){
        res.status(500)
        throw new Error(erro)
    }
}