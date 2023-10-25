import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "task",
})
.promise();

async function connection() {
  await pool.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("MySql Connected... ");
  });
  pool.destroy()
}

export {connection, pool}
