const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Generate JWT Token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register User
exports.registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await User.create({ name, email, password, role });
    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        role: user.role,
        token: generateToken(user._id, user.role),
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
        success: true,
        data: {
          id: user._id,
          name: user.name,
          role: user.role,
          token: generateToken(user._id, user.role),
        },
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
