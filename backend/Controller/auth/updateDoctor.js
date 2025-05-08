// controllers/updateDoctor.js
const Doctor = require("../../Models/doctors.model");
const fs = require("fs");
const path = require("path");

const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, specialization, hometown } = req.body;

    const doctor = await Doctor.findById(id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    // Update fields
    doctor.name = name || doctor.name;
    doctor.specialization = specialization || doctor.specialization;
    doctor.hometown = hometown || doctor.hometown;

    if (req.file) {
      // Delete old photo if exists
      if (doctor.photo) {
        const oldPath = path.join(__dirname, "..", doctor.photo);
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      doctor.photo = `/uploads/${req.file.filename}`;
    }

    await doctor.save();
    res.status(200).json({ message: "Doctor updated successfully", doctor });

  } catch (error) {
    console.error("Update Doctor Error:", error);
    res.status(500).json({ message: "Error updating doctor" });
  }
};

module.exports = updateDoctor;
