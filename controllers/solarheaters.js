const Solarheater = require('../models/Solarheater');
const ObjectId = require('mongoose').Types.ObjectId;

function getSolarheaters(request, response) {
    User.find().then(function (solarheaters) {
        response.send(solarheaters);
    });
}

function createSolarheater(request, response) {
    const solarheater = new Solarheater(request.body)
    Solarheater.create(solarheater)
    .then(function (solarheater) {
        response.status(201).send(solarheater);
    })
};

function updateSolarheater(request, response) {
    const id = request.params.id;
    const body = request.body;
    User.findOneAndUpdate({"_id": ObjectId(id)}, body)
    .then(function (solarheater) {
        response.status(200).send(solarheater);
    })
};

module.exports = {
    getSolarheaters,
    createSolarheater,
    updateSolarheater
}