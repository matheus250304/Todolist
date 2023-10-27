import { Router } from "express";
import express from "express";
import { TaskController } from "../controllers/TaskController.js";

const routes = Router();

const tarefas = new TaskController();


routes.post("/tarefas", async (req, res) => {
  const { name, description } = req.body
  const newTask = {
      name, description, isCompleted: false, created_at: String(new Date()), updated_at: String(new Date())
  }
  await tarefas.createTasks(newTask);
  console.log(newTask);
  res.status(201).json([newTask])
});
routes.get("/tarefas", async (req, res) => {
  const tarefas = new TaskController();
  const all = await tarefas.listAlltasks();
  console.log(all);
  res.send(all);
});

routes.get("/tarefas/:id" ,async (req, res) => {
  const {id} = req.params;
  const tarefasId = await tarefas.getTaskById(id);
  if(tarefasId[0] === undefined) {
    res.status(400).json('Tarefa não existe')
  }
  res.status(200).send(tarefasId)
});


routes.patch("/tarefas/:id/done", async (req, res) => {
  const {id} = req.params;
  const iscomplete = true 
  await tarefas.updateTaskStatus({id, iscomplete})
  res.status(201).json('Tarefa Concluida')
});





routes.delete("/deletetarefas/:id", async (req, res) => {
  const { id } = req.params;
  const all = await tarefas.deleteTask(id);
  if (!all) {
    res.status(400).json("Não Existe");
  } else {
    res.status(204).json("Lista deletada com sucesso");
  }
});

export { routes };
