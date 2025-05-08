const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      // enum: ["user", "admin"], // Optional: restrict to allowed roles
      default: "user",         // Default role
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema, "users");
