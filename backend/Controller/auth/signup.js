const { message } = require("antd");
const User = require("../../Models/user.model");
const { signupValidation } = require("../../Services/validation_schema");
const sendEmail = require("../../utils/sendEmail");


const signup = async (req, res, next) => {
  try {
    // Validate incoming data
    const signupValues = await signupValidation.validateAsync(req.body);
    const { fullName, emailAddress, password, confirmPassword } = signupValues;

    console.log(signupValues);

    //  Check if passwords match FIRST
    // if (password !== confirmPassword) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Passwords do not match.",
    //   });
    // }

    //  Now check if email already exists
    const existingUser = await User.findOne({ emailAddress });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists. Please log in.",
      });
    }

    // Save user if all checks pass
    const newUser = new User({
      fullName,
      emailAddress,
      password,
    });

    await newUser.save();
    await sendEmail(emailAddress, fullName, password);

    res.status(201).json({
      success: true,
      message: "User signed up successfully!",
      data: { fullName, emailAddress },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
