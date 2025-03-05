"use strict";
const express = require("express");
const bloggerController = require("../controllers/bloggerscontroller");
const router = express.Router();

router.param("id", bloggerController.checkID);


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

router
  .route("/:id/posts")
  .get(bloggerController.getBloggerPosts)
  .post(bloggerController.createPost);

//

router
  .route("/:id/posts/:postid")
  .get(bloggerController.singlePost)
  .delete(bloggerController.deletePost)
  .patch(bloggerController.updatePost);

module.exports = router;
