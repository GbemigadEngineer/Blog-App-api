"use strict";
const express = require("express");
const morgan = require("morgan");
const bloggersRouter = require("./routes/bloggersroute");
const postsRouter = require("./routes/postsroute");
const fs = require("fs");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// resource routers

app.use("/api/v1/bloggers", bloggersRouter);
app.use("/api/v1/posts", postsRouter);

module.exports = app;
