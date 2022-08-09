import express, {Request, Response} from "express";
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("ta rodando o servidor")
})

//exercicio 1 

app.get("/",(request:Request, response:Response) => {

  response.status(200).send("Bem vindo a api ")
})

//exercicio 2

app.get("/pegaDados",(request:Request, response:Response) => {

  response.status(200).send({message: "oi"})
})

//exercicio 3

let arry: Array<Object> = [{nome: "Fernanda", idade: 21},{nome: "Juliana", idade: 23},{nome: "Camila", idade: 30}]

console.log(arry[0])