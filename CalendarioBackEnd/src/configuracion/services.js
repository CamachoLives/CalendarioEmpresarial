const { configuracionRepository } = require('./repository');
const { createError } = require('../middleware/errorHandler');

const updateParametrizacionPlataforma = async (id, updateData) => {
  try {
    if (!id) {
      throw createError('ID del formulario requerido', 400);
    }

    if (!updateData || Object.keys(updateData).length === 0) {
      throw createError('Datos de actualización requeridos', 400);
    }

    const updateParametrizacionPlataforma =
      await configuracionRepository.updateParametrizacionPlataforma(
        id,
        updateData
      );

    if (!updateParametrizacionPlataforma) {
      return null;
    }

    return updateParametrizacionPlataforma;
  } catch (error) {
    if (error.isOperational) {
      throw error;
    }
    throw createError('Error al actualizar el formulario', 500);
  }
};

module.exports.configuracionService = {
  updateParametrizacionPlataforma,
};
