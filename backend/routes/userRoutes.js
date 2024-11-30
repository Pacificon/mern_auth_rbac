const express = require('express');
const { protect, restrictTo } = require('../middlewares/roleMiddleware');
const router = express.Router();

router.get('/admin', protect, restrictTo('Admin'), (req, res) => {
  res.send('Welcome Admin!');
});

router.get('/user', protect, restrictTo('User', 'Admin'), (req, res) => {
  res.send('Welcome User!');
});

module.exports = router;
