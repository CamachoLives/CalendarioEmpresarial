// this is the main entry point of the application
// importing necessary packages
const express = require("express");
const debug = require("debug")("app:main");

// initializing variables
const app = express();
const port = 7654;
const { config } = require("./src/config/index");

app.use(express.json());

// module imports

app.listen(config.port, () => {
  debug(`Server is running on:${config.port}`);
});
