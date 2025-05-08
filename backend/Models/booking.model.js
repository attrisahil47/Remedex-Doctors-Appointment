const { Schema, model } = require("mongoose");

const bookingSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
    },
    emailAddress: {
      type: String,
      required: [true, "Email is required"],
      
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\d{10}$/, "Phone number must be exactly 10 digits"],
    },
    //   Date: {
    //   type: Date,
    //   required: [true, "booking date is required"],
    //   validate: {
    //     validator: function (value) {
    //       return value >= new Date(); // Ensures date is not in the past
    //     },
    //     message: "booking date must be today or in the future",
    //   },
    // },
    bookingTime: {
      type: String,
      required: [true, "booking time is required"],
    },
    bookingDate: {
      type: String,
      required: [true, "booking Date is required"],
    },
    doctor: {
      type: String,
      required: [true, "Please select a doctor"],
    },
    message: {
      type: String,
      maxlength: [500, "Message cannot exceed 500 characters"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = model("booking", bookingSchema, "bookings");


