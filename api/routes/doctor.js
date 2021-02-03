const express = require("express");
const router = express.Router();
const doctorController = require("../controller/doctorController");

router.post("/registerDoctor", async function (req, res, next) {
    try {
        doctorController.register_doctor(req, res, next);    
    } catch (error) {
        console.log('errror', error);
        next(error);
    }
});

router.get("/fetchDoctor", async function (req, res, next) {
    try {
        doctorController.find_doctor_byId(req, res, next);    
    } catch (error) {
        console.log('errror', error);
        next(error);
    }
});

router.put("/updateDoctor", async function (req, res, next) {
    try {
        doctorController.update_doctor_byId(req, res, next);    
    } catch (error) {
        console.log('errror', error);
        next(error);
    }
});

router.delete("/removeDoctor", async function (req, res, next) {
    try {
        doctorController.delete_doctor_byId(req, res, next);    
    } catch (error) {
        console.log('errror', error);
        next(error);
    }
});

router.get("/", async function (req, res, next) {
    res.render('doctor');
});


module.exports = router;