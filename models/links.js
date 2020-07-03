const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linksSchema = new Schema({
   
          article_link: String,
          video_link: String

});

module.exports = mongoose.model('links', linksSchema)