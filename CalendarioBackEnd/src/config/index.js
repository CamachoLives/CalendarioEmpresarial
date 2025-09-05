require("dotenv").config();

module.exports = {
  dbHost: process.env.DB_HOST,
  dbPort: parseInt(process.env.DB_PORT, 10),
  dbUser: process.env.DB_USER,
  dbPassword: String(process.env.DB_PASSWORD),
  dbName: process.env.DB_NAME,
  port: parseInt(process.env.PORT, 10),
};
