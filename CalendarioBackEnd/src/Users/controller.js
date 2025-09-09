const debug = require("debug")("app:module-auth-controller");
const { UsersService } = require("./services");
const { response } = require("../common/response");

module.exports.usersController = {
  getEveryone: async (req, res) => {
    try {
      let user = await UsersService.Getall(req.query.email);
      response.success(res, "We will get the person's everything!", 200, user);
    } catch (error) {
      debug(error);
      response.error(res);
    }
  },
};
