const express = require("express");
const router = express.Router();
const registerController = require("../controller/registerController");

// redirect to login page with username 
router.post("/actionregister", async function (req, res, next) {
        registerController.register_user(req, res);
        res.render("login", { user: req.body }); // create registerSuccess page and allow login on succesful registration 
    });

router.get("/", async function (req, res, post) {
        res.render("register");
    });

module.exports = router;