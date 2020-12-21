'use strict';

const mongoose = require("mongoose");
//const validator = require("validator");

const appointmentSchema = new mongoose.Schema({
    appointmentTime: {
        type: Date,
        required: true
    },
    doctor_id: [{ type: Schema.Types.ObjectId, ref: 'Doctor' }],
    patient_id: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

exports.module = mongoose.model("Appointment", appointmentSchema);