const express = require('express')
const router = express.Router()

const { create, list, questionById, response, responsesQuantity, questionByCategory, responsesByQuestion } = require('../controllers/question')
const {rate,responseById,rateByResponseQuantity} = require('../controllers/response')
const { userById } = require('../controllers/user')
const { isAuth, requireSignin } = require('../controllers/auth')


router.get('/question/list/:userId', requireSignin, isAuth, list)
router.get('/question/response/quantity/:userId/:questionId', responsesQuantity)
router.get('/question/by/categories', questionByCategory)
router.get('/question/responses/:userId/:questionId', responsesByQuestion)
router.get('/question/response/rate/quantity/:responseId',rateByResponseQuantity)

router.post('/question/response/:userId/:questionId', response)
router.post('/question/create/:userId', requireSignin, isAuth, create)

router.put('/question/response/rate/:userId/:responseId', rate)

router.param('userId', userById)
router.param('questionId', questionById)
router.param('responseId',responseById)

module.exports = router