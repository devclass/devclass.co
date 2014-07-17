'use strict';
var mongoose = require('mongoose')
var config = require('./config')

mongoose.connect(config.mongoUri)

module.exports = mongoose
