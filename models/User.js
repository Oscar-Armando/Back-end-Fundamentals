/* User model definition */

const mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    firstname: String,
    lastname: String,
    address: String,
    Postal_Code: Number,
    paymentmethod: String,
    phone: Number
});

const User = mongoose.model("user", UserSchema);

module.exports = User;