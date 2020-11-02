const express = require('express')
const router = express.Router()

const { createClasses, classesByLocation, allClasses,classById } = require('../controllers/classes')
const { userById } = require('../controllers/user')

router.post('/classes/create', createClasses)

router.get('/classes/by/location/:userId', classesByLocation)
router.get('/classes/all', allClasses)

//middlewares
router.param('userId', userById)

module.exports = router