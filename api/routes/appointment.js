const express = require("express");
const router = express.Router();
const appointmentController = require("../controller/appointmentController");

router.post('/createAppointment', async(req, res, next) => {
    try {
    return await appointmentController.create_appointment(req, res, next);
    } catch (error) {
        next(error);
    }
});

router.delete('/deleteAppointment', async(req, res, next) => {
    try {
        return await appointmentController.delete_appointment(req, res, next);
    } catch (error) {
        next(error);
    }
});

router.get('/fetchAllAppointment', async(req, res, next) => {
    try {
        return await appointmentController.fetch_all_appointment(req, res, next);
    } catch (error) {
        next(error);
    }
});

router.get('/fetchAppointmentById', async(req, res, next) => {
    try {
        return await appointmentController.fetch_appointment_byId(req, res, next);
    } catch (error) {
        next(error);
    }
});

router.get('/', async(req, res, next) => {
    res.render('book_appointment');
});

module.exports = router;