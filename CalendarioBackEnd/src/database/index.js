// src/config/db.js
const { Pool } = require("pg");
const debug = require("debug")("app:database");
const config = require("../config/index");

let pool = null;

const connectDB = () => {
  return new Promise((resolve, reject) => {
    try {
      if (!pool) {
        pool = new Pool({
          host: config.dbHost,
          port: config.dbPort,
          user: config.dbUser,
          password: config.dbPassword,
          database: config.dbName,
        });

        pool.on("connect", () => debug("✅ Conectado a PostgreSQL"));
        pool.on("error", (err) => reject(err));
      }
      resolve(pool);
    } catch (error) {
      reject(error);
    }
  });
};

const query = (text, params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const client = await connectDB();
      const result = await client.query(text, params);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { query, connectDB };
