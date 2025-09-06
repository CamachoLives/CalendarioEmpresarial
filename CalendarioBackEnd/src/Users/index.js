const express = require("express");
const { usersController } = require("./controller");
const router = express.Router();

module.exports.Users = (app) => {
  router
    .get("/email", usersController.getEveryone) //
    // .post("/register", Authcontroller.Register);

  app.use("/users", router);
};
