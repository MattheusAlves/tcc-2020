const express = require('express')
const router = express.Router()

const { requireSignin, isAuth } = require('../controllers/auth')

const {
  disciplineById,
  create,
  list,
  remove
} = require('../controllers/discipline')

router.post(
  '/disciplines/create/:userId',
  requireSignin,
  isAuth,
  /** addisTeacher */ create
)
router.get('/disciplines/list', requireSignin, isAuth, list)
router.post('/disciplines/remove/:disciplineId', requireSignin, isAuth, remove)

router.param('disciplineId', disciplineById)

module.exports = router
