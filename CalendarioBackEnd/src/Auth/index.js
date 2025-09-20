const express = require('express');
const { AuthController } = require('./controller');
const { authSchemas, validateRequest } = require('../middleware/validation');
const { authRateLimit, authenticateToken } = require('../middleware/security');
const router = express.Router();
console.log('📂 Cargando archivo src/Auth/index.js');

module.exports.Auth = app => {
  console.log('Entrando a Auth');
  router
    .post(
      '/login',
      authRateLimit,
      validateRequest(authSchemas.login),
      AuthController.Login
    )
    .post(
      '/register',
      authRateLimit,
      validateRequest(authSchemas.register),
      AuthController.Register
    )
    .get('/verify', authenticateToken, AuthController.VerifyToken);
  console.log('Registrando rutas en Auth');

  // después de router.post(...).post(...).get(...)
console.log('🔹 router.stack (Auth) length:', router.stack.length);
console.log(router.stack.map(l => {
  if (l.route) return { path: l.route.path, methods: Object.keys(l.route.methods) };
  return { name: l.name || 'middleware', regexp: l.regexp && l.regexp.source };
}));

  app.use('/api/auth', router);

  console.log('🔸 app.use("/api/auth", router) called');

  console.log('Ruta registrada en Auth');
};
