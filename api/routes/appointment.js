const express = require("express");
const router = express.Router();
const appointmentController = require("../controller/appointmentController");

router.get('/createAppointment', async(req, res, next) => {
    try {
        const user = appointmentController.create_appointment(req, res, next);
        res.json(user)
        return;
    } catch (error) {
        next(error);
    }
});

router.get('/deleteAppointment', async(req, res, next) => {
    try {
        const user = appointmentController.delete_appointment(req, res, next);
        res.json(user)
        return;
    } catch (error) {
        next(error);
    }
});

module.exports = router;