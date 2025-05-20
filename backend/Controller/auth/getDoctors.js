const User = require("../../Models/doctors.model");

const getDoctors = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
}

module.exports = getDoctors;