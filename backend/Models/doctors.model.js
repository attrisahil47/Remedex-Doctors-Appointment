// models/Doctor.js
const { Schema, model } = require("mongoose");

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },

  hometown: {
    type: String,
    required: true,
  },
  photo: {
    type: String, // Store the path or URL
    required: false,
  },
}, { timestamps: true });

module.exports = model("Doctor", doctorSchema, "doctors");
