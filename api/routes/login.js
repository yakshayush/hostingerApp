const express = require("express");
const router = express.Router();
const loginController = require("../controller/loginController");
const passport = require('passport');

router.post("/signInForm", async(req, res, next) => {
    console.log('kkk');
    loginController.create_a_task(req, res);
    //  res.render("../../views/login");
    next();
});

//login main page
router.get("/", (req, res, next) => {
    res.render("login");
});

router.get("/auth/google", passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get("/google/callback",passport.authenticate('google'), (req, res) => {
    //console.log('error:', error);
    //console.log('response', response);
    //console.log('body', body);
    //console.log(response.statusCode);
    // return done(null, body);
    console.log('request --- ', req.user);
    console.log('request --- ', res.user);

    res.render('success', {user: req.user});
});

router.post("/login", (req, res) => {
    res.render("jak");
});

router.post("/signUpForm", (req, res) => {
    res.render("jak");
});

module.exports = router;