const User = require("../../Models/user.model");
const BookingModel = require("../../Models/booking.model");
const { bookingSchema } = require("../../Services/validation_schema");
const sendBookingConfirmEmail = require("../../utils/sendBookingConfirmEmail"); // ✅ Import the email utility

const bookingController = async (req, res, next) => {
  try {
    // ✅ Validate incoming data
    const bookingValues = await bookingSchema.validateAsync(req.body);
    const { fullName, emailAddress, bookingDate, bookingTime, doctor } = bookingValues;

    console.log("Booking Request:", bookingValues);

  

    await sendBookingConfirmEmail(emailAddress, fullName, doctor, bookingDate, bookingTime);

    // ✅ Respond to client
    res.status(201).json({
      success: true,
      message: "Booking confirmed successfully! Confirmation email sent.",
    });

  } catch (error) {
    next(error);
  }
};

module.exports = bookingController;
