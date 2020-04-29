const express = require('express')
const router = express.Router()

const { create, update } = require('../controllers/teacher')

const { requireSignin, isAuth } = require('../controllers/auth')

const { userById } = require('../controllers/user')

router.post('/teacher/create/:userId', requireSignin, isAuth, create)
router.post(
  '/teacher/update/disciplines/:userId',
  requireSignin,
  isAuth,
  update
)

router.param('userId', userById)
module.exports = router
