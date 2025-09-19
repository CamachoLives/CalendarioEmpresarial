// src/modules/users/user.repository.js
const db = require('../database/index');
const debug = require('debug')('app:user-repository');
const { response } = require('../common/response');

const findByEmail = email => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await db.query('SELECT * FROM usuarios WHERE email = $1', [
        email,
      ]);
      resolve(result.rows[0] || null);
    } catch (error) {
      debug('Error buscando usuario por email:', error);
      reject(error);
    }
  });
};

const create = user => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await db.query(
        'INSERT INTO usuarios (nombre, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
        [user.nombre, user.email, user.password],
      );
      resolve(result.rows[0]);
    } catch (error) {
      debug('Error creando usuario:', error);
      reject(error);
    }
  });
};

module.exports.authRepository = {
  create,
  findByEmail,
};
