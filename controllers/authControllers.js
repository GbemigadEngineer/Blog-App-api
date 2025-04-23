"use strict";
const User = require("../models/userModel.js");

// SIGN UP USER CONTROLLER.
// This controller handles the sign up process for a new user. It validates the input data, checks if the user already exists, and creates a new user if all validations are passed.
// It also sends a response back to the client with the status of the operation and the created user data.
const signupUserController = async (req, res) => {
  try {
    // 1. Get the data from the request body
    const { userName, email, password, phoneNumber } = req.body;
    // 2. validate to make sure that either email or phone number is provided
    if (!email && !phoneNumber) {
      return res.status(400).json({
        status: "fail",
        message: "Either email or phone number must be provided",
      });
    }
    // 3. Check to make sure other neccesary data is provided
    if (!userName || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide Username and or Password!",
      });
    }
    // 4. Check if the user already exists
    const userExists = await User.findOne({
      $or: [{ email }, { phoneNumber }],
    });
    if (userExists) {
      return res.status(400).json({
        status: "fail",
        message:
          "User already exists! This Email, or Phone number is already registered!",
      });
    }
    // 5. Create a new User If all validations are passed.
    const user = await User.create({
      userName,
      email,
      password,
      phoneNumber,
    });
    // 6. Send the response back to the client
    res.status(201).json({
      status: "success",
      message: "User Created Successfully!",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
}

module.exports = {
  signupUserController,
};
