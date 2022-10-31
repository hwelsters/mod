const mysql = require("mysql");

const createUserTable = `
CREATE TABLE IF NOT EXISTS Users(
  id INT PRIMARY KEY AUTO_INCREMENT, 
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE, 
  password VARCHAR(255) NOT NULL,
  verified BOOLEAN NOT NULL DEFAULT false
)
`;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Initialize tables
try {
  db.query(createUserTable);
} catch (err) {}

export default db;
