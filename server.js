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
    console.log("Database connection successfull!");
  });

// Schema

// posts Schema
const postsSchema = new mongoose.Schema({
  postid: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
});

//  Middlewear to generate postid automatically
// us e'validaate to make sure the middle wear runs before validation
postsSchema.pre("validate", async function (next) {
  if (!this.postid) {
    try {
      const count = await mongoose.model("Post").countDocuments(); // Count number of existing posts in db
      this.postid = String(count + 1).padStart(3, "0"); //convert newly generated post id to 001, 002, 004 etc
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
}); //.pre() a middlewear function in mongoose that runs before any of the CRUD actions is executed on the databse. in other words before your.save() or any other CRUD function works any .pre() middlewear is exxecuted first.

// Create the post model
const Post = mongoose.model("Post", postsSchema);

// create an instance of the post model

const newpost = new Post({
  content: "Hello welcome to my blog space!",
});

newpost
  .save()
  .then((doc) => {
    console.log(`${doc}, succesfully saved to db`);
  })
  .catch((err) => {
    console.log(err);
  });

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(
    `App running on port ${port}... and it is running in ${process.env.NODE_ENV} enviroment`
  );
});
