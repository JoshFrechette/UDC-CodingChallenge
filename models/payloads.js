const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const payloadsSchema = new Schema({
   
          payload_type: String,
          payload_mass_kg: Number,
          payload_mass_lbs: Number

});

module.exports = mongoose.model('payloads', payloadsSchema)