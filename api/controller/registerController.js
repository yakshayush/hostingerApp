'use strict';

var mongoose = require('mongoose'),
user = mongoose.model('User');

exports.register_user = async function(req, res, next) {
    var user_data = new user(req.body);
    await user_data.save()
    .then(user => {
      res.status(200);
      return user;
    }).catch(err => {
      res.status(400);
      throw err;
    });
};