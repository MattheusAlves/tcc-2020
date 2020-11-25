const express = require('express')
const router = express.Router()

const { requireSignin, isAuth } = require('../controllers/auth')
const { userById } = require('../controllers/user')
const {
  disciplineById,
  create,
  list,
  remove,
  searchDisciplines,
  disciplinesByUser
} = require('../controllers/discipline')

router.post(
  '/disciplines/create/:userId',
  // requireSignin,
  // isAuth,
  /** addisTeacher */ create
)
router.post('/disciplines/remove/:disciplineId', requireSignin, isAuth, remove)


router.get('/disciplines/by/user/:user', disciplinesByUser)
router.get('/disciplines/list', list)
router.get('/search/disciplines', searchDisciplines)

router.param('disciplineId', disciplineById)
router.param('user', userById)

module.exports = router
