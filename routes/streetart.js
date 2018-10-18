'use strict'

const express = require('express')
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId

const Streetart = require('../models/streetart')

router.get('/', (req, res, next) => {
  Streetart.find({})
    .then((results) => {
      res.json(results)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  const { name, author } = req.body
  if (!name || !author) {
    return res.status(422).json({ code: 'unprosessable-entity' })
  }
  const streetartcreate = new Streetart(req.body)
  streetartcreate.save()
    .then(() => {
      res.status(200).json(streetartcreate)
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  if (!id || !ObjectId.isValid(id)) {
    return res.status(404).json({ code: 'not-found' })
  }
  Streetart.remove({ _id: id })
    .then(() => {
      res.json({ code: 'street art deleted' })
    })
    .catch(next)
})

module.exports = router
