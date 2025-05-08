const feedback = require("../../Models/feedback.model");

const getFeedback = async (req, res) => {
  try {
    const feedbacks = await feedback.find(); // Use booking model here
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = getFeedback;