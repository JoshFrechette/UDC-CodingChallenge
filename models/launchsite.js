const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const launchSiteSchema = new Schema({
   
          site_name_long: String,

});

module.exports = mongoose.model('launcheSite', launchSiteSchema)