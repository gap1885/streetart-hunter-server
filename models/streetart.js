'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const streetartSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  url: {
    type: String
  }
})

const Streetart = mongoose.model('Streetart', streetartSchema)

module.exports = Streetart
