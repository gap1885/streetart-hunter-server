'use strict'

const express = require('express')
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId

const User = require('../models/user')

router.get('/', (req, res, next) => {
  User.find({})
    .then((results) => {
      res.json(results)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(422).json({ code: 'unprosessable-entity' })
  }
  const user = new User(req.body)
  user.save()
    .then(() => {
      res.status(200).json(user)
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  if (!id || !ObjectId.isValid(id)) {
    res.status(404).json({ code: 'not-found' })
  }
  User.remove({ _id: id })
    .then(() => {
      res.json({ code: 'user deleted' })
    })
    .catch(next)
})

module.exports = router
