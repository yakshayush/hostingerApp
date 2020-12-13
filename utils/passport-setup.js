const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const userModel = require('../model/user');
var userProfile;

passport.use(new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: "http://localhost:3000/login/google/callback"
    }, function(accessToken, refreshToken, profile, done) {
        // check if user already exists in our own db
       // console.log('#########################################################');
       // console.log('Authenticated with OAuth2');
       // console.log('accessToken', accessToken);
       // console.log('refreshToken', refreshToken);
       // console.log('profile= ',profile);
        userProfile=profile;
        userModel.findOne({ email: profile._json.email }).then((currentUser) => {
            if (currentUser) {
                console.log('user is: ', currentUser);
            } else {
                console.log(profile._json);
                new userModel({
                    email: profile._json.email,
                    name: profile._json.given_name,
                    lastname: profile._json.family_name,
                    profile: 'patient',
                    created: new Date(),
                    authType: profile.provider
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                });
            }
        });
        return done(null, userProfile);        
    }));

    passport.serializeUser(function(userProfile, done) {
        console.log('--***--',userProfile);
        done(null, userProfile.id);
    });
    
    passport.deserializeUser(function(id, done) {
        console.log('----', id);
        userModel.findById(id, function(err, user){
            console.log(user);
            if(!err) done(null, user);
            else done(err, null);
        });
    });