"use strict";
const bloggersModel = require("../models/bloggersModel");
const postsModel = require("../models/postModel");
const APIFeatures = require("../utils/apiFeatures");

// development middlewear for making sure that all our req with a query, have the query object logged to the console
// exports.printQuery = (req, res, next) => {
//   console.log(req.query);
//   next();
// };
// // development middlewear to see the request object in the console
// exports.printRequest = (req, res, next) => {
//   console.log({ body: req.body, params: req.params, query: req.query });
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
    // Build query
    const features = new APIFeatures(bloggersModel.find(), req.query)
      .filer()
      .sort()
      .limitFields()
      .paginate(); // this creates a new instance of the APIFeatures class and calls the methods on it to filter, sort, limit fields and paginate the query
    // execute query

    const allBlogers = await features.query; // this executes the query and returns the results

    // Response

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
    res.status(204).json({
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
