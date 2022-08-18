import express from "express"
import cors from "cors"


const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

//exercicio 1
app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})

//exercicio 2
let afazer: {userId: string, id: string, title: string, completed: boolean} = {
    userId: "1",
    id: "1",
    title: "cozinhar",
    completed: false
}

//exercicio 3
const tarefas: any[] = [ {
  userId: "1",
  id: "1",
  title: "cozinhar",
  completed: false
}, {
  userId: "2",
  id: "2",
  title: "ir no mercado",
  completed: true
}, {
  userId: "3",
  id: "3",
  title: "estudar",
  completed: false
}, {
  userId: "4",
  id: "4",
  title: "ver série",
  completed: true
}]; 

//exercicio 4
app.get("/todos", (req, res) => {          
  res.send(tarefas)
})

const TarefasConcluidas = tarefas.filter(function (el)
{
  return el.completed === true
}
);

const TarefasAndamento = tarefas.filter(function (el)
{
  return el.completed === false
}
);

app.get("/concluidos", (req, res) => {
    res.send(TarefasConcluidas)
})

app.get("/andamento", (req, res) => {
  res.send(TarefasAndamento)
})

//exercicio 5 

app.post("/criarTarefas", (req,res)=> {

  type NovaTarefa = {
    userId: "10",
    id: "10",
    title: "nova tarefa! => comer",
    completed: false
}

  const { userId, id, title, completed }: NovaTarefa = req.body

  const NovaTarefa = {
    userId,
    id,
    title,
    completed
  }

  tarefas.push(NovaTarefa)

  res.send(tarefas)
})

//exercicio 6 
app.put("/editarTerafa/:id/:status", (req,res) => {

  const idPerson = req.params.id

  const statusTarefa = req.params.status

  const tarefaPorId = tarefas.filter(function (el)
  {
  return el.userId === idPerson
  } 
  );
  const TarefaAtualizada = (tarefas: { completed: boolean }) => {

    if(statusTarefa === 'completa') {
      return tarefas.completed == true
    } 
  }
  res.send(statusTarefa)
  res.send(TarefaAtualizada)
})

//exercicio 7 
app.delete("/tarefas/:id", (req,res) => {
  const idPerson = req.params.id

  const dadosAtualizados = tarefas.map((tarefa) => {
    if (tarefa.id === idPerson) {
        let newArray = tarefas.filter((item) => item.id !== idPerson);
        tarefas.push(newArray)
        return {
          newArray
          }
    } else {
        return tarefa;
    }
});

  res.send(dadosAtualizados)

})

//exercicio 8
app.get("/tarefas/:id/", (req,res) => {
  const idPerson = req.params.id

  const tarefaPorId = tarefas.filter(function (el)
  {
  return el.userId === idPerson
  } 
  );

  res.send(tarefaPorId)

})