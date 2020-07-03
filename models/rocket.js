const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rocketSchema = new Schema({
   
          rocket_name: String,
          first_stage: String,
          second_stage: String

});

module.exports = mongoose.model('rocket', rocketSchema)