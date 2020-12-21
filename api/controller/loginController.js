'use strict';

var mongoose = require('mongoose');
var Task = mongoose.model('User');

exports.create_a_task = function(req, res, next) {
    var new_task = new Task(req.body);
    console.log('new_+tak ---' ,new_task)
    new_task.save()
    .then(function(response){
        res.json(response);
        return;
    })
    .catch(function(reason){
        next(reason);
    });
};