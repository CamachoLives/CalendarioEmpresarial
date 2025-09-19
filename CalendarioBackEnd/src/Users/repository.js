// src/modules/users/user.repository.js
const db = require('../database/index');
const debug = require('debug')('app:user-repository');

const getEverything = email => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.query('SELECT * FROM usuarios WHERE email = $1', [
        email,
      ]);
      resolve(res.rows[0]); // return the first matching user
    } catch (error) {
      debug('user don\'t found:', error);
      reject(error);
    }
  });
};

module.exports.UsersRepository = {
  getEverything,
};
