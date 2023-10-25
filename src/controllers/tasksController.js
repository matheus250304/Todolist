import { pool } from "../database/index.js";

class taskController {
  async createTasks({ nome, descricao, iscomplete}) {
    const [result] = await pool.query(
      `INSERT INTO tarefa ( nome, descricao, iscomplete)
                VALUES(?, ?, ?)`,
      [nome, descricao, iscomplete]
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
