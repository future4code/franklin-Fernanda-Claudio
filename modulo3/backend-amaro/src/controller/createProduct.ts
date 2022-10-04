import { Request, Response } from "express";
import { criarProduto } from "../services/criarProduto";

export const postProduct = async (req: Request, res: Response) => {
    try{
        const {id, name, tag} = req.body
        await criarProduto(id, name, tag)
        res.status(201).send("Produto inserido com sucesso!")
    }catch(erro: any){
        res.status(500)
        throw new Error(erro)
    }
}