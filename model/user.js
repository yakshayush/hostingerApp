'use strict';
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
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

    profile: {
        type: String,
        required: true,
        minlength: 5
    },

    email: {
        type: String,
        required: true,
        unique: [true, "EMail already exist"],
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

    confirmpassword: {
        type: String,
       // required: true,
       // minlength: 3
    },

    created: {
        type: Date
    }, 

    authType: {
        type: String
    }

});

//create new collections //
module.exports = mongoose.model("User", userSchema);