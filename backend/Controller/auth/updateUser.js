const User = require("../../Models/user.model");

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { emailAddress, fullName, password, role } = req.body;

  try {
    // Prepare updated data
    let updatedData = { emailAddress, fullName, role };

    // If password is provided, update it
    if (password) {
      updatedData.password = password; // No hashing, just save the plain password
    }

    // Update the user in the database
    const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true });

    // If the user is not found
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Log the updated fields
    console.log('Updated User:', updatedUser); // Log the updated fields to the console

    // Return the updated user data
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


module.exports = updateUser;
