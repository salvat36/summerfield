const { User } = require('../models');
const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            users
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
};

exports.login = (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user) => {
        if (err || !user) {
        return res.status(401).json({
            message: 'Authentication failed',
        });
        }

        req.login(user, { session: false }, (loginErr) => {
        if (loginErr) {
            return next(loginErr);
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

        return res.json({ token });
        });
    })(req, res, next);
    };