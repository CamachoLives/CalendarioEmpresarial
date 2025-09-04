const { MongoClient } = require("mongodb");
const debug = require("debug")("app:database");
const { config } = require("../config/index");

var connection = null;
module.exports.database = (collection) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!connection) {
        const client = new MongoClient(config.mongouri);
        connection = await client.connect();
        debug("Conectado a la base de datos");
      }
      debug("Usando la base de datos existente");
      const db = connection.db(config.mongodb);
      resolve(db.collection(collection));
    } catch (error) {
      debug(error);
      reject(error);
    }
  });
