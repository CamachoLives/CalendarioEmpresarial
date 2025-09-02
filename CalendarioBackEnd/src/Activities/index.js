const express = require("express");
const { activitiesController } = require("./controller");
const router = express.Router();

module.exports.activities = (app) => {
  router
    .get("/", activitiesController.getactivities) // http://localhost:7654/api/activities
    .get("/id", activitiesController.getactivityById) // http://localhost:7654/api/activities/66
    .post("/", activitiesController.createactivity); // http://localhost:7654/api/activities

  app.use("/api/activities", router);
};
