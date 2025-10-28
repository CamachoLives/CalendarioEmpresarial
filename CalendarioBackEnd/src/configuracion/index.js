const express = require('express');
const { configuracionController } = require('./controller');
const { authenticateToken } = require('../middleware/security');
const router = express.Router();

module.exports.configuracion = app => {
  router.update('/:id', authenticateToken, configuracionController.updateParametrizacionPlataforma);

  app.use('/configuracion', router);
};
