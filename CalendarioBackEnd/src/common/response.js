const createErrors = require("http-errors");

module.exports.response = {
  success: (res, message = "Nice", status = 200, body = {}) => {
    res.status(status).json({ message, body });
  },
  error: (req, error = null) => {
    const { statusCode, message } = error
      ? error
      : new createErrors.InternalServerError();
    res.status(statusCode).json({ message });
  },
};
