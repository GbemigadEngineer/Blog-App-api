"use strict";
const express = require("express");
const morgan = require("morgan");
const bloggersRouter = require("./routes/bloggersroute");
// const postsRouter = require("./routes/postsroute");
const fs = require("fs");
const controller = require("./controllers/bloggerscontroller");

const app = express();
if (process.env.NODE_ENV === "development") {
  // this is a development middlewear that logs all the requests to the console in morgan format
  app.use(morgan("dev"));
  // this is a development middlewear that logs all the requests with queries to the console
  // app.use(controller.printQuery);
  // // this is a development middlewear that logs all the requests object to the console
  // app.use(controller.printRequest);
}

app.use(express.json());

// resource routers

app.use("/api/v1/bloggers", bloggersRouter);
// app.use("/api/v1/posts", postsRouter);

module.exports = app;
