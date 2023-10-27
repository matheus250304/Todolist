import { pool } from "../database/index.js";

class TaskController {
  async createTasks({ nome, descricao, iscomplete, created_at, updated_at }) {
    const [result] = await pool.query(
      `INSERT INTO tarefa ( nome, descricao, iscomplete, created_at, updated_at)
                VALUES(?, ?, ?, ?, ?)`,
      [nome, descricao, iscomplete, created_at, updated_at]
    );
    const id = result.insertId;
    return this.listAlltasks();
  }
  async listAlltasks() {
    const [rows] = await pool.query(`SELECT * FROM tarefa `);
    return rows;
  }

  async deleteTask(id) {
    const [rows] = await pool.query(`DELETE FROM tarefa WHERE id = ${id}`);
    return rows;
  }

  async getTaskByid(id) {
    const [rows] = await pool.query(`SELECT * FROM tarefa WHERE id = ${id}`);
    return rows;
  }
  
  async updateTaskStatus({id, iscomplete}) {
    const {rows} = await pool.query(`UPDATE tasks Set iscomplete = ? WHERE id = ${id}`,
    [iscomplete, id,])
    return rows
  }
    
}



export { TaskController };
