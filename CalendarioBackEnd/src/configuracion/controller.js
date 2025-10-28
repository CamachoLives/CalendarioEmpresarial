// const debug = require('debug')('app:users-controller');
const { configuracionService } = require('./services');
const { createError } = require('../middleware/errorHandler');
const { response } = require('../common/response');

module.exports.configuracionController = {
  updateParametrizacionPlataforma: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      if (!id) {
        throw createError('ID del formulario es requerido', 400);
      }

      if (!updateData || Object.keys(updateData).length === 0) {
        throw createError('Datos de actualización requeridos', 400);
      }

      const updateParametrizacionPlataforma =
        await configuracionService.updateParametrizacionPlataforma(
          id,
          updateData
        );

      if (!updateParametrizacionPlataforma) {
        throw createError('Formulario base no encontrado', 404);
      }
      response.success(
        res,
        'Formulario actualizado correctamente ',
        200,
        updateParametrizacionPlataforma
      );
    } catch (error) {
      next(error);
    }
  },
};
