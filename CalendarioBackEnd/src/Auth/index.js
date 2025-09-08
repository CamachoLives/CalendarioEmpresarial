const express = require("express");
const { Authcontroller } = require("./controller");
const router = express.Router();
module.exports.Auth = (app) => {
  router
    .post("/login", Authcontroller.Login)
    .post("/register", Authcontroller.Register);

  app.use("/api/Auth", router);
};
