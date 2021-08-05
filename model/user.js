'use strict';
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');

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
        minlength: 4
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
        required: true,
        minlength: 3
    },

    created: {
        type: Date,
        default: Date.now()
    }, 

    phone: {
        type: Number
    }, 

    DOB: {
        type : String,
//        required : true
    },

    authType: {
        type: String
    }
});

userSchema.pre('save', async function(next) {
    try {
        console.log('pass' , this.password)
        const salt = await bcrypt.hash(this.password, 10)
        this.password = salt
        next();
    } catch (error) {
        next(error)   
    }
});

//create new collections //
module.exports = mongoose.model("User", userSchema, "user");