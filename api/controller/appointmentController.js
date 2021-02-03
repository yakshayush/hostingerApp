'use strict';

var mongoose = require('mongoose'),
    appointment = mongoose.model('Appointment');

exports.create_appointment = async function(req, res, next) {
    var new_appointment = new appointment(req.body);
    await new_appointment.save()
    .then(response => {
        return res.json(response);
    })
    .catch(reason => {
        next(reason);
    });
};

exports.delete_appointment = async function(req, res, next) {
    await appointment.findByIdAndDelete(mongoose.Types.ObjectId(req.param.id))
    .then(response => {
        return res.json(response);
    })
    .catch(reason => {
        next(reason);
    });
};

exports.fetch_all_appointment = async function(req, res, next) {
    await appointment.find()
    .then(response => {
        return res.json(response);
    })
    .catch(reason => {
        next(reason);
    });
};

exports.fetch_appointment_byId = async function(req, res, next) {
    await appointment.findById(mongoose.Types.ObjectId(req.param.id))
    .then(response => {
        return res.json(response);
    })
    .catch(reason => {
        next(reason);
    });
};