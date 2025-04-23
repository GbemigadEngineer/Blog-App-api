"use strict";
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Create Express App
const app = express();

// Middleware
app.use(cors()); // this is a middleware that allows cross-origin requests
if (process.env.NODE_ENV === "development") {
  // this is a development middlewear that logs all the requests to the console in morgan format
  app.use(morgan("dev"));
  // this is a development middlewear that logs all the requests with queries to the console
  // app.use(controller.printQuery);
  // // this is a development middlewear that logs all the requests object to the console
  // app.use(controller.printRequest);
}

app.use(express.json());

// resource route
app.use("api/v1/users", require("./routes/authroutes"));


module.exports = app;
