// controllers/deleteDoctor.js
const Doctor = require("../../Models/doctors.model");
const fs = require("fs");
const path = require("path");

const deleteDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findByIdAndDelete(id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    // Remove photo from filesystem
    if (doctor.photo) {
      const photoPath = path.join(__dirname, "..", doctor.photo);
      if (fs.existsSync(photoPath)) {
        fs.unlinkSync(photoPath);
      }
    }

    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    console.error("Delete Doctor Error:", error);
    res.status(500).json({ message: "Error deleting doctor" });
  }
};

module.exports = deleteDoctor;
