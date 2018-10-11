'use strict'

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')

const app = express()

mongoose.connect('mongodb://localhost/street-art', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
})

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60
  }),
  secret: 'some-string',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}))

app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.use((req, res, next) => {
  res.status(404).json({ code: 'not-found' })
})

app.use((err, req, res, next) => {
  console.error('ERROR', req.method, req.path, err)
  if (!res.headersSent) {
    res.status(500).json({ code: 'unexpected' })
  }
})

module.exports = app
