const express = require("express");
const { Auth } = require("./controller");
const router = express.Router();

module.exports.Authentication = (app) => {
  router
    .post("/login", Auth.Login) 
    .post("/register", Auth.createactivity); 

  app.use("/api/Auth", router);
};
