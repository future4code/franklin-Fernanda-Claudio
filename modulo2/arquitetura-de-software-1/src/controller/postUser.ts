import { Request, Response } from "express";
import { criarUsuario } from "../services/createUser";
export const postUser = async (req: Request, res: Response) => {
    try{
        const {name, email, password} = req.body
        await criarUsuario(name, email, password)
        res.status(201).send("Usuario cadastrado com sucesso!")
    }catch(erro: any){
        res.status(500)
        throw new Error(erro)
    }
}