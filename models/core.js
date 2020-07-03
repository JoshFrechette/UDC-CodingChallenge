const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coreSchema = new Schema({
   
          reuse_count: Number,
          status: String

});

module.exports = mongoose.model('core', coreSchema)