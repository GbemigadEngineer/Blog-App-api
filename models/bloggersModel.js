"use strict";
const mongoose = require("mongoose");
const bloggersSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
    unique: true,
  },
  bio: {
    type: "String",
  },
  phonenumber: {
    type: Number,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  
});

const bloggersModel = mongoose.model("bloggers", bloggersSchema);

module.exports = bloggersModel
