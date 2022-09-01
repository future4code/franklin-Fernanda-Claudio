import { Request, Response } from "express"
import app from "./app"
import connection from "./connection";


app.get("/actors", async (req: Request, res: Response) => {
  try {
      const result = await connection("Actor")
      res.send(result)
  } catch(error) {
      console.log(error);
  }
});

// exercicio 1

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result[0]
}

app.get("/actor/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name

    res.send(await searchActor(name))

  } catch (error) {
		console.log(error)
    res.status(500).send("Unexpected error")
  }
}) 

//---------

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  return result[0][0];
};

app.get("/actors/:gender", async (req: Request, res: Response) => {
  try {
    const gender = req.params.gender
    const result = await countActors(gender)
    res.send(result)

  } catch (error) {
		console.log(error)
    res.status(500).send("Unexpected error")
  }
}) 
//--------

//exercicio 2

const updateActor = async (id: string, salary: string): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id); 
};

app.put("/actor/:id/:salary", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const salary = req.params.salary
    const result = await updateActor(id, salary)
    res.send(result)

  } catch (error) {
		console.log(error)
    res.status(500).send("Unexpected error")
  }
}) 

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 


app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await deleteActor(id)
    res.send(result)

  } catch (error) {
		console.log(error)
    res.status(500).send("Unexpected error")
  }
}) 
