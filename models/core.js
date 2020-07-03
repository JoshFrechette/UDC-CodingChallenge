const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const launchPastSchema = new Schema({
   
          mission_name: String,
          launch_date_local: String,
          // launch_site 
          // links 
          // rocket 
          // ships 
});

module.exports = mongoose.model('launchesPast', launchPastSchema)