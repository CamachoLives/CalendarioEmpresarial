const debug = require("debug")("app:activities-controller");
const { activitiesService } = require("./services");

module.exports.activitiesController = {
  getactivities: async (req, res) => {
    try {
      let activities = await activitiesService.Getall();
      res.json(activities);
    } catch (error) {
      debug(error);
      res.status(500).json({ message: error.message });
    }
  },
  getactivityById: async (req, res) => {
    try {
      let id = await activitiesService.getById(req.id);
      res.status(201).json(id);
    } catch (error) {
      debug(error);
      res.status(500).json({ message: error.message });
    }
  },
  createactivity: async (req, res) => {
    try {
      let id = await activitiesService.create(req.body);
      res.status(201).json(id);
    } catch (error) {
      debug(error);
      res.status(404).json({ message: error.message });
    }
  },
};
