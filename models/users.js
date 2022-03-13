const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    dob: String,
    gender: String,
    ph_no: Number,
    address: String,
    city: String,
    state: String,
    symptoms: [{
        type: String
    }]
});

module.exports = mongoose.model("User", userSchema);
