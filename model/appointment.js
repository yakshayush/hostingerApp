'use strict';

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;
//const validator = require("validator");

const appointmentSchema = new mongoose.Schema({
    appointmentTime: {
        type: Date,
        required: true,
        unique: true
    },
    doctor_id: [{ type: Schema.Types.ObjectId, ref: 'Doctor' }],
    patient_id: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

//add validation on id's existence
module.exports = mongoose.model("Appointment", appointmentSchema, "appointment");