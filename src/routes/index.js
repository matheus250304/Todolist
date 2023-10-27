import { Router } from "express";
import express from "express";
import { TaskController } from "../controllers/TaskController.js";

const routes = Router();

const tarefas = new TaskController();


routes.post("/tarefas", async (req, res) => {
  const { nome, descricao, iscomplete, created_at, updated_at } = req.body;
  const tarefas = new TaskController();
  const all = await tarefas.createTasks({
    nome,
    descricao,
    iscomplete,
    created_at: String(new Date()),
    updated_at: String(new Date()),
  });
  console.log(all);
  res.send(all);
});

routes.get("/tarefas", async (req, res) => {
  const tarefas = new TaskController();
  const all = await tarefas.listAlltasks();
  console.log(all);
  res.send(all);
});

routes.get("/tarefas/:id" ,async (req, res) => {
  const {id} = req.params;
  const tarefasId = await tarefas.getTarefasById(id);
  res.status(200).send(tarefasId)
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
