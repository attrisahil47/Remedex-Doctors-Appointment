const booking = require("../../Models/booking.model");

const getBooking = async (req, res) => {
  try {
    const bookings = await booking.find(); // Use booking model here
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = getBooking;
