import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: "35.226.146.116",
    port: 3306,
    user: "franklin-fernanda-claudio",
    password: "CGm6NjrF~Z3wNk3z8lPh",
    database: "franklin-fernanda-claudio"
  }
});


const app: Express = express();
app.use(express.json());
app.use(cors());



app.post("/ToDoList/createUser/", (req,res) => {

   type newUser = {
     name: "Astro Dev",
     nickname: "astrodev",
     email: "astro@dev.com"
   }
 
   const { name, nickname, email }: newUser = req.body
 
   const newUser = {
     name,
     nickname,
     email,
   }
 
   users.push(newUser)
 
   res.send("usuario criado com sucesso!")
 })
 
 
  const users: any[] = [ {
   userId: "1",
   name: "FerDev",
   nickname: "fer",
   email: "dev@fe.com"
 }]; 

 const tasks: any[] = [ {
   taskId : "001",
   title: "Criar banco dos alunos",
   description: "Devemos criar o banco dos alunos para o módulo do backend",
   limitDate: "04/05/2020",
   creatorUserId: "001"
 }]; 
 
 app.get("/user/:id", (req,res) => {
 
   const idUser = req.params.id
 
   const UserId = users.filter(function (el)
   {
   return el.userId === idUser
   } 
   );
 
   res.send(UserId)
 
 })

 app.post("/ToDoList/createTask/", (req,res) => {
   type newTask = {
      title: "Criar banco dos alunos",
      description: "Devemos criar o banco dos alunos para o módulo do backend",
      limitDate: "04/05/2020",
      creatorUserId: "001"
   }
    const { title,description,limitDate,creatorUserId, }: newTask = req.body
  
    const newTask = {
      title,
      description,
      limitDate,
      creatorUserId,
    }
  
    tasks.push(newTask)

    res.send("Tarefa criada com sucesso!")
   
 })

 app.get("/task/:id", (req,res) => {
 
   const idTask = req.params.id
 
   const taskId = tasks.filter(function (el)
   {
   return el.taskId === idTask
   } 
   );
 
   res.send(taskId)
 
 })
 app.get("/users/all", (req,res) => {
 
   res.send(users)
  console.log(users)
 })


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});