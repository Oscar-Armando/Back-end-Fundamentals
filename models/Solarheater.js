/* Solar-heater model definition */

const mongoose  = require('mongoose');

const SolarheaterSchema = new mongoose.Schema({
    make: {type: String, maxLength: 30},
    tubes: {type: Number, required: true},
    capacity: {type: Number, required: true},
    people: {type: Number, required: true},
    price: {type: Number, required: true},
    quantity:{type: Number, required: true}
});

const Solarheater = mongoose.model("solarheater", SolarheaterSchema);

module.exports = Solarheater;