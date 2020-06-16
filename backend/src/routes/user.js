const express = require('express')
const router = express.Router()

const { requireSignin, isAuth } = require('../controllers/auth')
const { disciplineById } = require('../controllers/discipline')

const { userById, update, updateLocation } = require('../controllers/user')

router.get('/secret/:userId', requireSignin, isAuth, (req, res) => {
  res.json({
    user: req.profile
  })
})

router.post(
  '/update/disciplines/:userId',
  requireSignin,
  isAuth,
  update
)
router.put(
  '/update/location/:userId', updateLocation
)
router.param('userId', userById)
router.param('disciplineId', disciplineById)

module.exports = router
