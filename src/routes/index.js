import { Router } from "express";
import express from "express";
import { taskController } from "../controllers/tasksController.js";

const routes = Router();

routes.get("/tarefas", async (req, res) => {
  const tarefas = new taskController();
  const all = await tarefas.listAlltasks();
  console.log(all);
  res.send(all);
});

routes.post("/tarefas", async (req, res) => {
  const {  nome, descricao, iscomplete } = req.body
    const tarefas = new taskController();
    const all = await tarefas.createTasks({ nome, descricao, iscomplete}); 
    console.log(all);
    res.send(all)
})

export { routes };
