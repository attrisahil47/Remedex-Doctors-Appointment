const contact = require("../../Models/contact.model");

const getContact = async (req, res) => {
  try {
    const contacts = await contact.find(); // Use booking model here
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = getContact;