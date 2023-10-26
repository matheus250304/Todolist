import { Router } from "express";
import express from "express";
import { taskController } from "../controllers/tasksController.js";

const routes = Router();

const tarefas = new taskController();

routes.get("/tarefas", async (req, res) => {
  const tarefas = new taskController();
  const all = await tarefas.listAlltasks();
  console.log(all);
  res.send(all);
});

routes.post("/tarefas", async (req, res) => {
  const { nome, descricao, iscomplete, created_at, updated_at } = req.body;
  const tarefas = new taskController();
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
