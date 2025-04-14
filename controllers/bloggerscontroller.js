"use strict";
const bloggersModel = require("../models/bloggersModel");
const postsModel = require("../models/postModel");

// development middlewear for making sure that all our req with a query, have the query object logged to the console
exports.printQuery = (req, res, next) => {
  console.log(req.query);
  next();
};
// development middlewear to see the request object in the console
exports.printRequest = (req, res, next) => {
  console.log({ body: req.body, params: req.params, query: req.query });
  next();
};

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

    // filtering

    const queryObj = { ...req.query }; // this creates a new copy of the  req.query
    const excludedFields = ["page", "sort", "limit", "fields"]; // These are the properties / fields/ keys that i want to be excuded from my query string
    excludedFields.forEach((el) => {
      delete queryObj[el];
    });

    // Advanced filtering

    let queryStr = JSON.stringify(queryObj); // this converts the query object to a string
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`); // this replaces the gte, gt, lte and lt with $gte, $gt, $lte and $lt respectively

    const query = bloggersModel.find(JSON.parse(queryStr));

    // Sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" "); // this splits the query string by , and joins it with a space
      console.log(sortBy); // this logs the sortBy string to the console
      query.sort(sortBy); // this sorts the query by the sortBy string
    } else {
      query.sort("-createdAt"); // this sorts the query by the createdAt field in descending order
    }

    // Field limiting

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" "); // this splits the query string by , and joins it with a space
      query.select(fields); // this selects the fields in the query string
    }

    // Pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 2;
    const skip = (page - 1) * limit; // this calculates the number of documents to skip
    query = query.skip(skip).limit(limit); // the .skip is used to know the ammount of documents that would be skipped before quering or displaying starts. i.e the page we want, the .limit whatever value passed into the. limit is the number of response to be sent per page.

    // this is a check to see if the page is valid or not, if not it throws an error. i.e if the page is less than 1 or the limit is less than 1, it throws an error.
    if (req.query.page) {
      const numBloggers = await bloggersModel.countDocuments(); // this counts the number of documents in the bloggers collection
      if (skip >= numBloggers) {
        throw new Error("This page does not exist!");
      }
    }
    // execute query

    const allBlogers = await query;

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
