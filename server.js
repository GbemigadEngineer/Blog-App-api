"use strict";
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./index");
const connectDb = require("./config/db");

// DATABASE CONNECTION
connectDb();
// Schema

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(
    `App running on port ${port}... and it is running in ${process.env.NODE_ENV} enviroment`
  );
});
