'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    username: String,
    googleId: String
});

module.exports = mongoose.model('login', loginSchema);