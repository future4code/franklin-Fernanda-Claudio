import express from "express"
import cors from "cors"
import { postProduct } from "./controller/createProduct"
const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.post("/product", postProduct)
