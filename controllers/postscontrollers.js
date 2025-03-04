"use strict";

// get all posts

exports.getAllPosts = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "All posts fetched successfully",
  });
};
