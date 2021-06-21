'use strict';

var mongoose = require('mongoose');
var userModel = mongoose.model('User');
const bcrypt = require('bcrypt');

exports.create_a_task = async function(req, res, next) {
    console.log(req.body);
    await userModel.findOne({email: req.body.email })
    .then((user) => {
        ( async() => {
            var result = await bcrypt.compare(req.body.password, user.password);
            console.log(result);
            if (result === true) {
                res.redirect('/');
            }
    })
}).catch((err) => {
        throw err;
});
};