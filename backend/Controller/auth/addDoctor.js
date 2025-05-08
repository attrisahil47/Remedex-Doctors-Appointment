const Doctor = require('../../Models/doctors.model');

const addDoctor = async (req, res) => {
  try {
    const { name, specialization, hometown } = req.body;
    // const photo = req.file ? `${}` : null;

    const newDoctor = new Doctor({
      name,
      specialization,
      hometown,
      photo : req.file.filename
    });

    await newDoctor.save();
    res.status(201).json({ message: 'Doctor added successfully', doctor: newDoctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding doctor', error: error.message });
  }
};

module.exports = addDoctor;
