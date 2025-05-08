
const User = require('../../Models/user.model'); 

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    
    // Find the user by ID and delete them
    const user = await User.findByIdAndDelete(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = deleteUser;
