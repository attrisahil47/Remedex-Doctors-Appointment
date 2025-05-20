require("dotenv").config();
const nodemailer = require("nodemailer");

const sendBookingEmail = async (emailAddress, fullName, doctor, bookingDate, bookingTime) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.GMAIL_PASSWORD,
    },
  });
  console.log(doctor)
  console.log(bookingTime)

  const mailOptions = {
    from: `"Remedex Doctor Consultation App" <${process.env.GMAIL_ID}>`,
    to: emailAddress,
    subject: "Appointment Booking Confirmed ✅",
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: white; border-radius: 8px; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h2 style="color: #4CAF50;">Booking Confirmation ✅</h2>
          <p>Hello <strong>${fullName}</strong>,</p>
          <p>Your appointment has been <strong>successfully booked</strong> with Remedex. Here are the details of your booking:</p>
    
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
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Doctor:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${doctor}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Date:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${bookingDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Time:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${bookingTime}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Status:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Confirmed</td>
            </tr>
          </table>
    
          <p style="margin-top: 20px;">Please be available at least 10 minutes before your scheduled time. If you need to reschedule or cancel, contact us at <a href="mailto:Remedex47@gmail.com">Remedex47@gmail.com</a>.</p>
          
          <p>Thank you for using Remedex. We look forward to serving your health needs!</p>
    
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

module.exports = sendBookingEmail;
