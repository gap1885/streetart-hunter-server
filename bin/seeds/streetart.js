'use strict'

require('dotenv').config()

const mongoose = require('mongoose')

const data = require('../../data/streetartlist')
const Streetart = require('../../models/streetart.js')

const options = {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
}

mongoose.connect(process.env.MONGODB_URI, options)
  .then(() => {
    console.log('Connected to Mongo!')
    return Streetart.deleteMany({})
  })
  .then(() => {
    console.log('Clean DB')
    return Streetart.insertMany(data)
  })
  .then((results) => {
    console.log('You have some streetart', results.length)
    return mongoose.connection.close()
  })
  .then((results) => {
    console.log('Connection closed')
  })
  .catch((error) => {
    console.log('There is a problem', error)
  })
