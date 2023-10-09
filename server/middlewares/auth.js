const path = require('path');
const dotenv = require('dotenv'); 
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const passport = require('passport');
const passportJWT = require('passport-jwt');
const { ExtractJwt } = passportJWT;
const { User } = require('../models');

const JWTStrategy = passportJWT.Strategy;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

passport.use(
    new JWTStrategy(opts, (jwtPayload, done) => {
    // Check if the user exists in the database using jwtPayload.id
    User.findOne({ where: { id: jwtPayload.id } })
        .then((user) => {
        if (user) {
            return done(null, user);
        }
        return done(null, false);
        })
        .catch((error) => {
        return done(error, false);
        });
    })
);

module.exports = {
    passport,
};
