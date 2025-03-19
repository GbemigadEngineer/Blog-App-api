"use strict";
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./index");

// DATABASE CONNECTION
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// Using mongoose to connect to our db
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((connectionobj) => {
    console.log(connectionobj);
    console.log("Database connection successfull!");
  });
// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(
    `App running on port ${port}... and it is running in ${process.env.NODE_ENV} enviroment`
  );
});
