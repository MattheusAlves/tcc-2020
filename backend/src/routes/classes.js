const express = require('express')
const router = express.Router()

const { createClasses, classesByLocation,allClasses } = require('../controllers/classes')
const { userById } = require('../controllers/user')

router.post('/classes/create', createClasses)

router.get('/classes/by/location', classesByLocation)
router.get('/classes/all',allClasses)

//middlewares
router.param('userId', userById)

module.exports = router