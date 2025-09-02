// this is the main entry point of the application
// importing necessary packages
const express = require("express");
const debug = require("debug")("app:main");
const { activities } = require("./src/Activities/index");

// initializing variables
const app = express();
const { config } = require("./src/config/index");

app.use(express.json());

// module imports
activities(app);

app.listen(config.port, () => {
  debug(`Server is running on:${config.port}`);
});
