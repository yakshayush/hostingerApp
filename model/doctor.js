'use strict';

const mongoose = require("mongoose");
const validator = require("validator");

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },

    lastname: {
        type: String,
        required: true,
        minlength: 3
    },

    specialization: {
        type: String,
        required: true,
        minlength: 5
    },

    email: {
        type: String,
        required: true,
        unique: [true, "Email already exist"],
        validate(value) {
            if (!validator.isEmail(value)) {
                console.log(value);
                throw new console.error("invalid email");
            }
        }
    },

    password: {
        type: String,
      //  required: true,
      //  minlength: 3
    },

    created: {
        type: Date, default: Date.now
    }, 

    phone: {
        type: Number
    }, 

    authType: {
        type: String
    },

    address:{
        type: String
    }, 

    onlineConsultation: {
        type: Boolean
    },

    consultationCharge: {
        type: Number
    },

    clinicName: {
        type: String
    }
});

module.exports = mongoose.model("Doctor", doctorSchema, "doctor");