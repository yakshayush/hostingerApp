'use strict';
const mongoose = require("mongoose");
const validator = require("validator");

const loginSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        //unique:[true,"EMail already exist"],   
        validate(value) {
            if (validator.isEmail(value)) {
                throw new console.error("invalid email");
            }
        }
    },

    password: {
        type: String,
        required: true,
        minlength: 3,
        validate(value) {
            if (validator.isStrongPassword(value)) {
                throw new console.error("invalid email");
            }
        }

        //isStrongPassword(str [, options])
    },

});

//create new collections //
module.exports = mongoose.model("Login", loginSchema);