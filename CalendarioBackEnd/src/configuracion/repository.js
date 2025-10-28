// src/modules/users/user.repository.js
const db = require('../database/index');
const debug = require('debug')('app:configuracion-repository');

const updateParametrizacionPlataforma = async (id, json) => {
  console.log('JSON EN REPO --> ', json);
  console.log('ID --> ', id);

  try {
    const query = `
      UPDATE parametros
      SET
        logo = $1,
        color_plataforma = $2,
        ruta_almacenamiento = $3,
        caducidad_dias = $4,
        longitud_minima = $5,
        carousel = $6,
        dashboard = $7,
        autenticacion = $8,
        tiempo_sesion = $9
      WHERE id = $10
      RETURNING *;
    `;

    const values = [
      json.logo || null,
      json.color || null,
      json.path || null,
      json.caducidad || null,
      json.longitudminimapass || null,
      json.carousel || false,
      json.dashboard || false,
      json.autenticacion || false,
      json.tiemposesion || null,
      id,
    ];

    const result = await db.query(query, values);

    return result.rows[0] || null;
  } catch (error) {
    console.error('Error actualizando parametrización:', error);
    throw error;
  }
};

module.exports.authRepository = {
  updateParametrizacionPlataforma,
};
