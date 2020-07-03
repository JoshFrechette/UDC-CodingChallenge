const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coresSchema = new Schema({
   
          flight: Number

});

module.exports = mongoose.model('cores', coresSchema)