var mongoose = require('../mongoose')

var feature = mongoose.Schema({
  title: {type: String, required: true},
  icon: {type: String},
  description: {type: String}
})

var course = mongoose.Schema({
  title: {type: String, required: true},
  slug: {type: String, required: true, index: { unique: true }},
  subtitle: {type: String },
  description: {type: String },
  image: {type: String },
  upcoming: {type: Boolean, default: false},
  features: [feature],
  createdAt: {type: Date, required: true, default: Date.now},
})

module.exports = mongoose.model('Course', course)
