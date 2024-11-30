const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Generate JWT Token
const generateToken = (id, name, role) => {
  return jwt.sign({ id, name, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register User
exports.registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Create a new user
    const newUser = await User.create({ name, email, password, role: role || 'User' });

    // Generate JWT token
    const token = generateToken(newUser._id, newUser.name, newUser.role);

    // Respond with user details and token
    res.status(201).json({
      success: true,
      message: 'Registration successful',
      data: {
        id: newUser._id,
        name: newUser.name,
        role: newUser.role,
        token,
      },
    });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Please provide email and password' });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = generateToken(user._id, user.name, user.role);

    // Respond with user details and token
    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        id: user._id,
        name: user.name,
        role: user.role,
        token,
      },
    });
  } catch (error) {
    console.error('Error logging in user:', error.message);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};
