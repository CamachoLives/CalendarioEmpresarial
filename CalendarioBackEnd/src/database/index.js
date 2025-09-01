const { MongoClient } = require("mongodb");
const debug = require("debug")("app:database");
const { config } = require("../config/index");

var connection = null;
module.exports.database = (collection) =>
  new promise(async (resolve, reject) => {
    try {
      const client = new MongoClient(config.mongouri);
      if (connection) {
        connection = await client.connect();
        debug("Conectado a la base de datos");
      }
      const db = connection.db(config.mongodb);
      resolve(db.collection(collection));
    } catch (error) {
      debug(error);
      reject(error);
    }
  });
