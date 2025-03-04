"use strict";
const express = require("express");
const postsController = require("../controllers/postscontrollers");
const router = express.Router();

// routes
router.route("/").get(postsController.getAllPosts);

module.exports = router;
