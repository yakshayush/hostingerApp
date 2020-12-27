'use strict';

var mongoose = require('mongoose'),
doctorSchmema = mongoose.model('Doctor');

exports.register_doctor = function(req, res, next) {
    var doctor_data = new doctorSchmema(req.body);
    doctor_data.save()
    .then(function(task) {
        res.json(task.body);
        return;
    }).catch(function(error){
        next(error)
    });
};

exports.find_doctor_byId = function(req, res, next) {
    doctorSchmema.findById(req.param.id)
    .then(function(doctorProfile) {
        res.json(doctorProfile.body);
        return
    }).catch(function(error){
        next(error);
    });
};

exports.delete_doctor_byId = function(req, res, next) {
    doctorSchmema.findByIdAndDelete(req.param.id)
    .then(function(response) {
        res.json(response.body);
        return;
    }).catch(function(error){
        next(error);
    });  
};

exports.update_doctor_byId = function(req, res, next) {
    doctorSchmema.findByIdAndUpdate(req.param.id)
    .then(function(updateResult) {
        res.json(updateResult.body);
        return
    }).catch(function(error){
        next(error);
    });
};