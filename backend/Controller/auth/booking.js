const User = require("../../Models/user.model");
const BookingModel = require("../../Models/booking.model");
const { bookingValidation } = require("../../Services/validation_schema");
const sendBookingEmail = require("../../utils/sendBookingEmail"); // ✅ Import the email utility

const bookingController = async (req, res, next) => {
  try {
    // ✅ Validate incoming data
    const bookingValues = await bookingValidation.validateAsync(req.body);
    const { fullName, emailAddress, phone, bookingDate, bookingTime, doctor, message } = bookingValues;

    console.log("Booking Request:", bookingValues);

    // ✅ Check if the user exists
    const existingUser = await User.findOne({ emailAddress });

    if (!existingUser) {
      return res.status(400).json({ success: false, message: "User not found. Please sign up." });
    }

    // ✅ Save booking in DB
    const newBooking = new BookingModel({
      fullName,
      emailAddress,
      phone,
      bookingDate,
      bookingTime,
      doctor,
      message,
    });

    await newBooking.save();

    // ✅ Send confirmation email
  

    await sendBookingEmail(emailAddress, fullName, doctor, bookingDate, bookingTime);

    // ✅ Respond to client
    res.status(201).json({
      success: true,
      message: "Booking confirmed successfully! Confirmation email sent.",
      data: newBooking,
    });

  } catch (error) {
    next(error);
  }
};

module.exports = bookingController;
