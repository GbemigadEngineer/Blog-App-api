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

// get a particularpost of a blogger by post id

const singlePost = (req, res) => {};
// delete a post of a blogger by post id
const deletePost = (req, res) => {};
// update a post of a blogger by post id
const updatePost = (req, res) => {};

// delete a blogger by id
const deleteBlogger = (req, res) => {};
// update a blogger by id
const updateBlogger = (req, res) => {};
// routes
// app.route("api/v1/createpost").post(createPost);
app.route("api/v1/bloggers").get(getAllBloggers).post(createBlogger);
app
  .route("api/v1/bloggers/:id")
  .get(getBloggerById)
  .delete(deleteBlogger)
  .patch(updateBlogger);
app.route("api/v1/bloggers/:id/posts").post(createPost);
app.route("api/v1/bloggers/:id/posts").get(getBloggerPosts);
app
  .route("api/v1/bloggers/:id/posts/:postid")
  .get(singlePost)
  .delete(deletePost)
  .patch(updatePost);

// Start the server
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

//  i want to be able to:
/* 



get all posts,
*/
