const express = requrie("express");

const router = express.Router();

// routes

// SIgnup Route

router.route("/signup").post(signupUserController);
