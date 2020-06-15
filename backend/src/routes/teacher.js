const express = require('express')
const router = express.Router()

const { create, update,teachesrByLocation } = require('../controllers/teacher')

const { requireSignin, isAuth } = require('../controllers/auth')

const { userById } = require('../controllers/user')

router.post('/teacher/create/:userId', requireSignin, isAuth, create)
router.post(
  '/teacher/update/disciplines/:userId',
  requireSignin,
  isAuth,
  update
)
router.get('/teacher/location', teachesrByLocation)
//buscar geolocation do usuario e trazer professores que estão perto

router.param('userId', userById)
module.exports = router
