// this is the main entry point of the application
// importing necessary packages
const express = require("express");
const cors = require("cors");

const debug = require("debug")("app:main");
const app = express();

// here we will import all the modules
const { Auth } = require("./src/Auth/index");
const { activities } = require("./src/Activities/index");
const { Users } = require("./src/Users/index");
// const { config } = require("./src/config/index");

// initializing variables
app.use(cors());
app.use(express.json());

// module imports
activities(app);
Auth(app);
Users(app);

app.listen(process.env.PORT, () => {
  debug(`Server is running on:${process.env.PORT}`);
});
