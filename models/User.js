/* User model definition */

const mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, maxLength: 30},
    firstname: {type: String, required: true, maxLength: 30},
    lastname: {type: String, required:true, maxLength: 30},
    address: {type: String, required:true, maxLength: 30 },
    postalcode: {type: Number, required:true},
    paymentmethod: {type: String, required:true},
    phone: {type: Number, required:true}
});

UserSchema.path("email").validate(function(value){
    return this.model("user").count({email: value}).then(function(count){
    return count < 1;
   });
}, "Repeated email");

const User = mongoose.model("user", UserSchema);

module.exports = User;