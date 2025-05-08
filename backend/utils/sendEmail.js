require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (emailAddress, fullName, password) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Remedex Doctor Consultation App" <${process.env.GMAIL_ID}>`,
    to: emailAddress,
    subject: "User Registration Successful",
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: white; border-radius: 8px; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h2 style="color: #4CAF50;">Registration Confirmed ✅</h2>
          <p>Hello <strong>${fullName}</strong>,</p>
          <p>Your registration has been <strong>successfully confirmed</strong> with Remedex Consultation App. Below are your registration details:</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Full Name:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email Address:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${emailAddress}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Password:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${password}</td>
            </tr>
          </table>

          <p style="margin-top: 20px;">If you have any questions or need assistance, feel free to reply to this email Remedex47@gmail.com.</p>
          <p>Thank you for choosing Remedex. We wish you good health!</p>

          <div style="margin-top: 30px; font-size: 12px; color: #888;">
            <hr />
            <p style="text-align: center;">&copy; ${new Date().getFullYear()} Remedex Doctor Consultation App. All rights reserved.</p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
