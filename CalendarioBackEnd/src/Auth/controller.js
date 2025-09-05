const debug = require("debug")("app:module-auth-controller");
const { AuthServices } = require("./services");
const { response } = require("../common/response");

module.exports.Authcontroller = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await AuthServices.login(email, password);
      res.json(result);
    } catch (error) {
      debug(error);
      response.error(res);
    }
  },
  register: async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await AuthServices.register(email, password);
      res.status(201).json(result);
    } catch (error) {
      debug(error);
      response.error(res);
    }
  },
};
