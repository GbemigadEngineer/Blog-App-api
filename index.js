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

const createPost = (req, res) => {
  res.status(201).json({
    status: "success",
    message: "Post created successfully",
  });
};
// get a blogger by id
const getBloggerById = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Blogger fetched successfully",
  });
};

// get all posts of a blogger by id
const getBloggerPosts = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "All posts fetched successfully",
  });
};

// get a particularpost of a blogger by post id

const singlePost = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Post fetched successfully",
  });
};
// delete a post of a blogger by post id
const deletePost = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Post deleted successfully",
  });
};
// update a post of a blogger by post id
const updatePost = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Post updated successfully",
  });
};

// delete a blogger by id
const deleteBlogger = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Blogger deleted successfully",
  });
};
// update a blogger by id
const updateBlogger = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Blogger updated successfully",
  });
};
// get all posts
const getAllPosts = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "All posts fetched successfully",
  });
};
// routes
app.route("/api/v1/bloggers").get(getAllBloggers).post(createBlogger);
app
  .route("/api/v1/bloggers/:id")
  .get(getBloggerById)
  .delete(deleteBlogger)
  .patch(updateBlogger);
//

app.route("/api/v1/bloggers/:id/posts").get(getBloggerPosts).post(createPost);
//

app
  .route("/api/v1/bloggers/:id/posts/:postid")
  .get(singlePost)
  .delete(deletePost)
  .patch(updatePost);

app.route("/api/v1/posts").get(getAllPosts);

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
