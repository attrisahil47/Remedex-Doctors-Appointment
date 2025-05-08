const {message} = require("antd");
const contactForm = require("../../Models/contact.model")
const {contactValidationSchema} = require("../../Services/validation_schema")

const form = async (req, res, next) => {
  try {
    const contactValues = await contactValidationSchema.validateAsync(req.body)
    console.log(contactValues);

    const { fullName, email, phone, message } = contactValues;

    const formData = new contactForm({
      fullName,
      email,
      phone,
      message
    })
    await formData.save()
    res.status(200).json({
      success: true,
      message: "Message Sent successfully",
      data: contactValues,
    });

  } catch (error) {
    next(error);
  }
};

module.exports= form;