'use strict';

var mongoose = require('mongoose'),
user = mongoose.model('User');

exports.register_user = function(req, res) {
  console.log('register data', req.body);
  var user_data = new user(req.body);
  user_data.save(function(err, task) {
        if (err)
        console.log(err); 
        res.json(task);
      });
};