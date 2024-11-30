const express = require('express');
const User = require('../models/userModel');
const { verifyToken, checkAdminRole } = require('../middleware/authMiddleware');

const router = express.Router();

// Fetch all users (Admin Only)
router.get('/users', verifyToken, checkAdminRole, async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude passwords
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
