const debug = require("debug")("app:module-auth-controller");
const { AuthServices } = require("./services");
const { response } = require("../common/response");

module.exports.Authcontroller = {
  Login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await AuthServices.Login(email, password);
      res.json(result);
    } catch (error) {
      debug(error);
      response.error(res);
    }
  },
  Register: async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await AuthServices.Register(email, password);
      res.status(201).json(result);
    } catch (error) {
      debug(error);
      response.error(res);
    }
  },
};
