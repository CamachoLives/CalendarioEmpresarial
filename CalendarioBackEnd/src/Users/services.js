const { ObejctId } = require("mongodb");
const { database } = require("../database/index");
const { UsersRepository } = require("./repository");

const Getall = async (Email) => {
  console.log("Email --> ", Email);
  const all = await UsersRepository.getEverything(Email);
  return all;
};
module.exports.UsersService = {
  Getall,
};
