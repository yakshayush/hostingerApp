const express = require("express");
const router = express.Router();
const doctorController = require("../controller/doctorController");

router.post("/registerDoctor", async function (req, res, next) {
    try {
        doctorController.register_doctor(req, res);    
    } catch (error) {
        console.log('errror', error);
    }
res.render("login", { user: req.body }); // create registerSuccess page and allow login on succesful registration 
});
