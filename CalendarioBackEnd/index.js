// this is the main entry point of the application
// importing necessary packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const debug = require("debug")("app:main");
const app = express();

// Security and middleware imports
const {
  generalRateLimit,
  helmetConfig,
  sanitizeLogs,
} = require("./src/middleware/security");
const { errorHandler, notFound } = require("./src/middleware/errorHandler");

// here we will import all the modules
const { Auth } = require("./src/Auth/index");
const { activities } = require("./src/Activities/index");
const { Users } = require("./src/Users/index");

// Security middleware (debe ir primero)
app.use(helmetConfig);
app.use(generalRateLimit);
app.use(sanitizeLogs);

// CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:4200",
    credentials: true,
  })
);

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// module imports
activities(app);
Auth(app);
Users(app);

// Error handling middleware (debe ir al final)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  debug(`Server is running on port: ${PORT}`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
