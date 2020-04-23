const express = require('express')
const router = express.Router()

const { create, list, questionById, response } = require('../controllers/question')
const { userById } = require('../controllers/user')
const { isAuth, requireSignin } = require('../controllers/auth')

router.post('/question/create/:userId', requireSignin, isAuth, create)
router.get('/question/list/:userId/:questionById', requireSignin, isAuth, list)
router.post('/question/response/:userId/:questionById', requireSignin, isAuth, response)


router.param('userId', userById)
router.param('questionById', questionById)


module.exports = router