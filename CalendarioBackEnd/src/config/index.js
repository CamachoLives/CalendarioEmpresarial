require("dotenv").config();

module.exports.config = {
  port: process.env.PORT || 7654,
  mongouri: process.env.MONGO_URI,
  mongodb: process.env.MONGODB,
};
