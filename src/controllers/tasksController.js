import { pool } from "../database/index.js";

class taskController {
  async createTasks({ nome, descricao, iscomplete, created_at, updated_at}) {
    const [result] = await pool.query(
      `INSERT INTO tarefa ( nome, descricao, iscomplete, created_at, updated_at)
                VALUES(?, ?, ?, ?, ?)`,
      [nome, descricao, iscomplete, created_at, updated_at ]
    );
    const id = result.insertId;
    return this.listAlltasks();
  }
  async listAlltasks() {
    const [rows] = await pool.query(`SELECT * FROM tarefa `);
    return rows;
  }
}

export { taskController };
