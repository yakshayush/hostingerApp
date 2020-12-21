'use strict';

var mongoose = require('mongoose'),
doctorSchmema = mongoose.model('Doctor');

exports.register_doctor = function(req, res) {
    var doctor_data = new doctorSchmema(req.body);
    doctor_data.save(function(err, task) {
    if (err) {
        console.log(err); 
    }
    res.json(task.body);
});
};