const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const userModel = require('../model/user-model');

passport.use(new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: "http://localhost:3000/login/google/callback",
        passReqToCallback: true
    },

    (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        userModel.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                // already have this user
                console.log('user is: ', currentUser);
                // do something
            } else {
                // if not, create user in our db
                console.log(profile);
                new userModel({
                    googleId: profile.id,
                    username: profile.displayName
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    // do something
                });
            }
        });
    }));