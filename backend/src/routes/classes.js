const express = require('express')
const router = express.Router()

const { createClasses } = require('../controllers/classes')


router.post('/classes/create', createClasses)

module.exports = router