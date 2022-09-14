import { postUser } from './controller/postUser';
import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.post("/users/signup", postUser)