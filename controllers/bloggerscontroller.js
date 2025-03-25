"use strict";
const bloggersModel = require("../models/bloggersModel");

// check ID middlewear
// exports.checkID = (req, res, next, val) => {
//   // code to check if the id is valid will go here
//   console.log(`Blogger id is ${val}`);
//   next();
// };
// create a blogger,

exports.createBlogger = async (req, res) => {
  try {
    const newBlogger = await bloggersModel.create(req.body);

    res.status(201).json({
      status: "success!",
      message: "Blogger created successfully",
      data: {
        blogger: newBlogger,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Error!",
      message: "Failed to create a new blogger!", // Later we would learn how to handle error diffrently, dont write errors like this for real world production apps
      err,
    });
  }
};

// get all bloggers,

exports.getAllBloggers = async (req, res) => {
  try {
    const allBlogers = await bloggersModel.find();
    res.status(200).json({
      status: "success",
      message: "All bloggers fetched successfully",
      data: {
        allBlogers,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Error!",
      message: err,
    });
  }
};

// get a blogger by id
exports.getBloggerById = async (req, res) => {
  try {
    const blogger = await bloggersModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Blogger fetched successfully",
      data: {
        blogger,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Error!",
      message: err,
    });
  }
};

// delete a blogger by id

exports.deleteBlogger = async (req, res) => {
  try {
    await bloggersModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Blogger deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "Error!",
      message: err,
    });
  }
};
// update a blogger by id

exports.updateBlogger = async (req, res) => {
  try {
    const tour = await bloggersModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // To make sure the newly updated document is returned
        runValidators: true, // To make sure the validators are run against the updated data
      }
    );
    res.status(200).json({
      status: "success",
      message: "Blogger updated successfully",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Error!",
      message: err,
    });
  }
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
