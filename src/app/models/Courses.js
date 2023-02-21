const mongoose = require('mongoose');

var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
        name: { type: String },
        description: { type: String},
        image: { type: String },
        videoId: { type: String, required: true},
        slug: { type: String, slug: "name", unique: true},
      }, {
        timestamps : true,
      });

module.exports = mongoose.model('Course', Course);
