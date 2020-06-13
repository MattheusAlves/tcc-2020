const express = require('express')
const router = express.Router()

const { create, list, questionById, response, asnwersQuantity } = require('../controllers/question')
const { userById } = require('../controllers/user')
const { isAuth, requireSignin } = require('../controllers/auth')

router.post('/question/create/:userId', requireSignin, isAuth, create)
router.get('/question/list/:userId', requireSignin, isAuth, list)
router.get('/question/response/quantity/:userId/:questionId', requireSignin, isAuth, asnwersQuantity)
router.post('/question/response/:userId/:questionId', requireSignin, isAuth, response)


router.param('userId', userById)
router.param('questionId', questionById)


module.exports = router