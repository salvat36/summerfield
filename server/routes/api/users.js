const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const { passport } = require('../../middlewares/auth');
const { checkAccessLevel } = require('../../middlewares/accessControl');

// Login route
router.post('/login', userController.login);

// Protected route for admins
router.get('/admin', passport.authenticate('jwt', { session: false }), checkAccessLevel('admin'), (req, res) => {
  // Handle admin-only functionality here
    res.json({ message: 'Admin route accessed' });
});

// Protected route for owners
router.get('/owner', passport.authenticate('jwt', { session: false }), checkAccessLevel('owner'), (req, res) => {
  // Handle owner-only functionality here
    res.json({ message: 'Owner route accessed' });
});

module.exports = router;