const { Schema, model } = require("mongoose");

const feedbackSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    
    },
    email: {
      type: String,
      required: true,
     
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    message: {
      type: String,
      required: true,
     
    },
  },
  { timestamps: true }
);

module.exports = model("Feedback", feedbackSchema, "feedbacks");
