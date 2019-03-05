let mongoose = require('mongoose');
const HospitalSchema = new mongoose.Schema({
    username: String,
    email: String,
    created:{
        type: Date,
        default: Date.now()
    }
    
});
const Hospital = mongoose.models('Hospital', HospitalSchema);
module.exports = Hospital;