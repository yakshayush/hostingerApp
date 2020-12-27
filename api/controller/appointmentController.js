'use strict';

var mongoose = require('mongoose'),
    appointment = mongoose.model('Appointment');

exports.create_a_task = function(req, res, next) {
    var new_appointment = new appointment(req.body);
    console.log('new_appointment ---' ,new_appointment)
    new_appointment.save()
    .then(function(response){
        res.json(response);
        return;
    })
    .catch(function(reason){
        next(reason);
    });
};

exports.delete_appointment = function(req, res, next) {
    appointment.findByIdAndDelete(req.param.id)
    .then(function(response){
        res.json(response);
        return;
    })
    .catch(function(reason){
        next(reason);
    });
};