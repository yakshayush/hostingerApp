'use strict';

var mongoose = require('mongoose');
var userModel = mongoose.model('User');
//const { default: ObjectID } = require('bson-objectid');
const { MongoClient, Logger, ObjectID } = require("mongodb");

exports.deleteUserById = function(req, res, next) {
    console.log('delete id ---' , req.param.id);
    userModel.findByIdAndDelete(req.param.id)
    .then(function(response){
        return;
    })
    .catch(function(reason){
        next(reason);
    });
}

exports.updateUserById = function(req, res, next) {
    console.log('update id ---' , req.param.id);
    userModel.updateUserById(req.param.id)
    .then(function(response){
        return;
    })
    .catch(function(reason){
        next(reason);
    });
}

exports.findUserById = async function(req, res, next) {
    try {
        var userId = new ObjectID(req.params.userId);
    if (!mongoose.isValidObjectId(userId)) {
        res.status(400).json('userId is not valid');
        return;
    }
    await userModel.findById(mongoose.Types.ObjectId(req.params.userId))
    .then(user => {
        return res.status(200).send(JSON.stringify({user: user}));
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        });
    });
} catch(err) {
    next(err);
    }
}