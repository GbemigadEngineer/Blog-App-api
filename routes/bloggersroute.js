"use strict";
const express = require("express");
const bloggerController = require("../controllers/bloggerscontroller");
const router = express.Router();

// router.param("id", bloggerController.checkID);

router
  .route("/")
  .get(bloggerController.getAllBloggers)
  .post(bloggerController.createBlogger);
router
  .route("/:id")
  .get(bloggerController.getBloggerById)
  .delete(bloggerController.deleteBlogger)
  .patch(bloggerController.updateBlogger);

//

module.exports = router;
