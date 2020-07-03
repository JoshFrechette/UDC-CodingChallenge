const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipsSchema = new Schema({
   
          name: String,
          home_port: String,
          image: String
});

module.exports = mongoose.model('ships', shipsSchema)