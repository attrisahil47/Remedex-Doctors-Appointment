const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
    required: function () {
          return !this.isGoogleUser; // Only required if not a Google user
        },
      unique: true,
    },
password: {
        type: String,
        required: function () {
          return !this.isGoogleUser; // Only required if not a Google user
        },
      },
      isGoogleUser: {
        type: Boolean,
        default: false,
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
