'use strict';

var mongoose = require('mongoose');
var userModel = mongoose.model('User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const config = require('config');

exports.create_a_task = async function(req, res, next) {
    console.log(req.body);
    await userModel.findOne({email: req.body.email })
    .then((user) => {
        console.log(user);
        bcrypt.compare(req.body.password, user.password, function(err, result) {
            console.log(result);
            if (result === true) {
                const token = jwt.sign({id: user._id, user_email_id: user.email}, config.TOKEN_SECRET);
                res.header("auth-token", token);
                res.redirect('/');
            }
        });
}).catch((err) => {
        throw err;
});
};