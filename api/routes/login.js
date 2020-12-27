const express = require("express");
const router = express.Router();
const loginController = require("../controller/loginController");
const passport = require('passport');

router.post("/signInForm", async(req, res, next) => {
try{
    loginController.create_a_task(req, res, next);
}catch(error) {
    next(error);
}   
});

//login main page
router.get("/", (req, res, next) => {
    res.render("login_register");
});

router.get("/auth/google", passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get("/google/callback",passport.authenticate('google'), (req, res) => {
    res.render('success', {user: req.user});
});

router.post("/login", (req, res) => {
    res.render("jak");
});

router.post("/signUpForm", (req, res) => {
    res.render("jak");
});

module.exports = router;