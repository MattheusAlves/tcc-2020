const express = require('express')
const router = express.Router()

const { createTeacher, updateTeacher } = require('../controllers/teacher')

const { requireSignin, isAuth } = require('../controllers/auth')

const { userById } = require('../controllers/user')

router.post('/teacher/create/:userId', requireSignin, isAuth, createTeacher)
router.post(
  '/teacher/update/disciplines/:userId',
  requireSignin,
  isAuth,
  updateTeacher
)

router.param('userId', userById)
module.exports = router
