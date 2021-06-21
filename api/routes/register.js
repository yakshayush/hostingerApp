const express = require("express");
const router = express.Router();
const registerController = require("../controller/registerController");

// redirect to home page with username 
router.post("/actionregister", async function (req, res, next) {
    try{
        await registerController.register_user(req, res, next);
        if (res.statusCode === 200) {
            res.redirect('/login');
        }
    } catch (err) {
        //error handling
        console.log(err);
    }
});

router.get("/", async function (req, res, post) {
        res.render("register");
    });

module.exports = router;