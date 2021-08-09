const Solarheater = require('../models/Solarheater');
const ObjectId = require('mongoose').Types.ObjectId;

function getSolarheaters(request, response) {
    Solarheater.find({}).then(function(solarheaters) {
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
    Solarheater.findOneAndUpdate({"_id": ObjectId(id)}, body)
    .then(function (solarheater) {
        response.status(200).send(solarheater);
    })
};

function deleteSolarheater(request, response){
    let id = request.params.id
    Solarheater.findById({"_id": ObjectId(id)}, (err) => {
    if(err)response.status(500).send({message: `Error when deleting the product: ${err}`})
    Solarheater.deleteOne(err => {
        if(err)response.status(500).send({message: `Error when deleting the product: ${err}`})
        response.status(200).send({message: `the product was removed`})
       })
    })
}

module.exports = {
    getSolarheaters,
    createSolarheater,
    updateSolarheater,
    deleteSolarheater
}