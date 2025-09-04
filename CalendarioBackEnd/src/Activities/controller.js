const debug = require("debug")("app:activities-controller");
const { activitiesService } = require("./services");
const { response } = require("../common/response");
const createErrors = require("http-errors");

module.exports.activitiesController = {
  getactivities: async (req, res) => {
    try {
      console.log("Entre");
      let activities = await activitiesService.Getall();
      response.success(res, "We will get the activities!", 200, activities);
    } catch (error) {
      debug(error);
      response.error(res);
    }
  },
  getactivityById: async (req, res) => {
    try {
      let id = await activitiesService.getById(req.id);
      if (!id) {
        response.error(res, new createErrors.NotFound());
      } else {
        response.success(res, "Activities by ID!", 200, id);
      }
    } catch (error) {
      debug(error);
      response.error(res);
    }
  },
  createactivity: async (req, res) => {
    try {
      let Create = await activitiesService.create(req.body);
      response.success(res, "Create Activitie!", 200, req.body);
    } catch (error) {
      debug(error);
      response.error(res);
    }
  },
};
