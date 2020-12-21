'use strict';

const mongoose = require("mongoose");
//const validator = require("validator");

const reportSchema = new mongoose.Schema({
    generationTime: {
        type: Date,
        required: true
    },
    report:{
        type: Object
    },
    doctor_id: [{ type: Schema.Types.ObjectId, ref: 'Doctor' }],
    patient_id: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

exports.module = mongoose.model("Report", reportSchema);