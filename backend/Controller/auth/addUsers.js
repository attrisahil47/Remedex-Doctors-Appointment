const User = require("../../Models/user.model");
const { addUservalidation } = require("../../Services/validation_schema");
// const sendEmailForAddUser = require("../../services/sendEmailForAddUser");
// const bcrypt = require("bcryptjs");

const addUser = async (req, res, next) => {
  try {
    const validatedData = await addUservalidation.validateAsync(req.body);
    const { emailAddress, fullName, password, role } = validatedData;

    const existingUser = await User.findOne({ emailAddress });
    if (existingUser) {
      console.log("User already registered");
      return res.status(400).json({
        message: "User already registered. Please login.",
        isNewUser: false,
      });
    }
    const newUser = new User({
        fullName,
      emailAddress,
      password,
      role,
    });

    await newUser.save();


    console.log("User Registered Successfully");
    return res.status(201).json({
      message: "User registered successfully 🎉",
      success: true,
      isNewUser: true,
    });

  } catch (error) {
    console.error("Registration Error:", error.message);
    return res.status(500).json({
      message: "Failed to register user",
      error: error.message,
    });
  }
};

module.exports = addUser;