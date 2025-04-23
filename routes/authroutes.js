const express = require("express");
const { signupUserController } = require("../controllers/authControllers");

const router = express.Router();

// routes

// Signup Route
router.route("/signup").post(signupUserController);

// export the router
module.exports = router;
