"use strict";
// create a blogger,

exports.createBlogger = (req, res) => {
  res.status(201).json({
    status: "success",
    message: "Blogger created successfully",
  });
};

// get all bloggers,

exports.getAllBloggers = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "All bloggers fetched successfully",
  });
};

// get a blogger by id
exports.getBloggerById = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Blogger fetched successfully",
  });
};

// get all posts of a blogger by id

exports.getBloggerPosts = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "All posts fetched successfully",
  });
};

exports.createPost = (req, res) => {
  res.status(201).json({
    status: "success",
    message: "Post created successfully",
  });
};
// get a blogger by id

// get a particularpost of a blogger by post id

exports.singlePost = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Post fetched successfully",
  });
};
// delete a post of a blogger by post id

exports.deletePost = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Post deleted successfully",
  });
};
// update a post of a blogger by post id

exports.updatePost = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Post updated successfully",
  });
};

// delete a blogger by id

exports.deleteBlogger = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Blogger deleted successfully",
  });
};
// update a blogger by id

exports.updateBlogger = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Blogger updated successfully",
  });
};
