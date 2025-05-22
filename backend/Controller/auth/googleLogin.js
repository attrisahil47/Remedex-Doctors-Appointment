const axios = require('axios');
const jwt = require('jsonwebtoken');
const { oauth2Client } = require('../../utils/googleClient');
const User = require('../../Models/user.model');
require('dotenv').config();

const googleLogin = async (req, res) => {
  try {
    const code = req.query.code;

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`
    );

    const { email, name } = userRes.data;

    let user = await User.findOne({ emailAddress: email });

    if (!user) {
      user = await User.create({
        emailAddress: email,
        fullName: name,
        password: "google-oauth-user",
        isGoogleUser: true,
      });
    }

    const token = jwt.sign(
      { _id: user._id, email: user.emailAddress },
      process.env.SECRET_KEY,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        email: user.emailAddress,
        fullName: user.fullName,
      },
    });
  } catch (err) {
    console.error("Google login error:", err);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

module.exports = googleLogin;
