const Joi = require("joi");

const signupValidation = Joi.object({
    fullName: Joi.string().required(),
    emailAddress: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
    role:Joi.string()
   
});


const loginValidation = Joi.object({
  emailAddress: Joi.string().email().required(),
  password: Joi.string().required(),
}).unknown(true); //  Allows extra fields like "remember"


const contactValidationSchema = Joi.object({
  fullName: Joi.string().required().messages({
    "string.empty": "Full name is required"
  }),

  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Please enter a valid email address",
  }),

  phone: Joi.string().required().messages({
      "string.empty": "Phone number is required",
    }),

  message: Joi.string().required().messages({
    "string.empty": "Message is required",
  }),
});



const bookingValidation = Joi.object({
  fullName: Joi.string().min(3).max(50).required(),
  emailAddress: Joi.string().email().required(),
  phone: Joi.string().pattern(/^\d{10}$/).required(),
  bookingDate: Joi.string().required(),
  bookingTime: Joi.string().required(),
  doctor: Joi.string().required(),
  message: Joi.string().optional(),
});


const feedbackValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  rating: Joi.number().min(1).max(5).required(),
  message: Joi.string().required(),})

  const addUservalidation = Joi.object({
    fullName: Joi.string().required(),
      
      emailAddress: Joi.string().email(),
      password: Joi.string().required(),
   
      role: Joi.string().valid('admin', 'user'),
  })

  const bookingSchema = Joi.object({
  fullName: Joi.string().required(),
  emailAddress: Joi.string().email().required(),
  bookingDate: Joi.string().required(),
  bookingTime: Joi.string().required(),
  doctor: Joi.string().required(),
});


  // validators/doctorValidation.js

const doctorValidationSchema = Joi.object({
  name: Joi.string().required(),
  specialization: Joi.string().required(),
  hometown: Joi.string().required(),
  photo: Joi.string().uri().optional().messages({
    "string.uri": "Photo must be a valid URL",
  }),
});











module.exports = { signupValidation , loginValidation,bookingSchema, contactValidationSchema,  bookingValidation, feedbackValidation, addUservalidation, doctorValidationSchema };