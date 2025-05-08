const Feedback = require("../../Models/feedback.model");
const { feedbackValidation } = require("../../Services/validation_schema");

const submitFeedback = async (req, res, next) => {
  try {
    // Validate incoming feedback data
    const feedbackValues = await feedbackValidation.validateAsync(req.body);
    const { name, email, rating, message } = feedbackValues;

    console.log(feedbackValues);

    // Save feedback if validation passes
    const newFeedback = new Feedback({
      name,
      email,
      rating,
      message,
    });

    await newFeedback.save();

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully!",
      data: { name, email, rating, message },
    });
  } catch (error) {
    next(error);
  }
};

module.exports= submitFeedback;
