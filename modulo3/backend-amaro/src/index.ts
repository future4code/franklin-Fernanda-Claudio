import { postProduct } from './controller/postProduct';
import { getProduct } from "./controller/getProduct"
import express from "express"
import cors from "cors"
import { getProductByTag } from './controller/getProductByTag';
const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get('/products', getProduct)
app.get('/product/:tag', getProductByTag)
app.post('/product', postProduct)
