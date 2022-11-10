const mysql = require("mysql");

// USER TABLE
const createUserTable = `
CREATE TABLE IF NOT EXISTS Users(
  id INT PRIMARY KEY AUTO_INCREMENT, 
  gems INT DEFAULT 0,
  progress INT DEFAULT 0,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE, 
  password VARCHAR(255) NOT NULL,
  verified BOOLEAN DEFAULT False
)
`;

// OTP TABLE
const createOtpTable = `
CREATE TABLE IF NOT EXISTS Otp(
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE,
  verificationCode VARCHAR(255) NOT NULL
)
`;

const createAwardTable = `
CREATE TABLE IF NOT EXISTS Awards(
  id INT PRIMARY KEY AUTO_INCREMENT,
  userID INT NOT NULL,
  awardId INT NOT NULL
)
`

const createFollowerTable = `
CREATE TABLE IF NOT EXISTS Followers(
  id INT PRIMARY KEY AUTO_INCREMENT,
  followerId INT NOT NULL,
  leaderId INT NOT NULL
)
`

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
  db.query(createOtpTable);
  db.query(createAwardTable);
  db.query(createFollowerTable);
} catch (err) {}

export default db;
