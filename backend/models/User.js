// backend/models/User.js

const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure the email is unique
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User',
    },
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
