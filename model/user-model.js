const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String
});

const newuser = mongoose.model('newuser', userSchema);

module.exports = newuser;