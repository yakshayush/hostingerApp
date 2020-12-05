'use strict';

var mongoose = require('mongoose'),
Task = mongoose.model('User');

exports.create_a_task = function(req, res) {
    var new_task = new Task(req.body);
    new_task.save(function(err, task) {
      if (err)
       console.log(err); 
      res.json(task);
    });
  };

