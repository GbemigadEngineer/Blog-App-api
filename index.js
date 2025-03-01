"use strict";
const express = require("express");
const fs = require("fs");
const { get } = require("http");

const app = express();

app.use(express.json());

/*Route handlers */

// create a blogger,
const createBlogger = (req, res) => {
  res.status(201).json({
    status: "success",
    message: "Blogger created successfully",
  });
};

// get all bloggers,
const getAllBloggers = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "All bloggers fetched successfully",
  });
};

const createPost = (req, res) => {};
// get a blogger by id
const getBloggerById = (req, res) => {};

// get all posts of a blogger by id
const getBloggerPosts = (req, res) => {};

// routes
// app.route("api/v1/createpost").post(createPost);
app.route("api/v1/bloggers").get(getAllBloggers).post(createBlogger);
app.route("api/v1/bloggers/:id/").get(getBloggerById);
app.route("api/v1/bloggers/:id/posts").get(getBloggerPosts);
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

//  i want to be able to:
/* 

create a post for a blogger or patch a post to the blogger posts object/ array,

delete a post of a blogger by id,
update a post of a blogger by id,
delete a blogger by id,
update a blogger by id,
get all posts,
*/
