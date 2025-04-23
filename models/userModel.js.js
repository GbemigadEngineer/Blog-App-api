const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
      trim: true,
      minLength: [4, "Username must be at least 4 characters long"],
      maxLength: [15, "Username must be at most 15 characters long"],
    },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minLength: [6, "Password must be at least 6 characters long"],
      maxLength: [20, "Password must be at most 20 characters long"],
    },
    phoneNumber: {
      type: String,
      unique: [true, "Phone number already exists"],
      trim: true,
    },
    usertype: {
      type: String,
      required: [true, "User type is required."],
      default: "blogger",
      enum: ["blogger", "admin"],
    },
  },
  { timestamps: true }
);

// Add a schema-level custom validation
// this is a pre-validation hook that runs before the document is validated
// it checks if either email or phone number is provided, and if not, it invalidates the document
userSchema.pre("validate", function (next) {
  if (!this.email && !this.phoneNumber) {
    this.invalidate("email", "Either email or phone number must be provided");
    this.invalidate(
      "phoneNumber",
      "Either phone number or email must be provided"
    );
  }
  next();
});

// Create a model from the schema
const User = mongoose.model("User", userSchema);

// Export the model
module.exports = User;
