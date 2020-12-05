'use strict';

var mongoose = require('mongoose'),
Task = mongoose.model('User');

exports.register_user = function(req, res) {
    var user_data = new Task(req.body);
    user_data.save(function(err, task) {
        if (err)
         console.log(err); 
        res.json(task);
      });

};