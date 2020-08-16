const express = require('express')
const router = express.Router()

const { create, list, questionById, response, responsesQuantity, questionByCategory, questionByUnicCategory,
    responsesByQuestion, rateQuestion } = require('../controllers/question')
const { rate, responseById, rateByResponseQuantity } = require('../controllers/response')
const { userById } = require('../controllers/user')
const { isAuth, requireSignin } = require('../controllers/auth')
const { disciplineById } = require('../controllers/discipline')


router.get('/question/list/:userId', requireSignin, isAuth, list)
router.get('/question/response/quantity/:userId/:questionId', responsesQuantity)
router.get('/question/by/categories/', questionByCategory)
router.get('/question/responses/:userId/:questionId', responsesByQuestion)
router.get('/question/response/rate/quantity/:responseId', rateByResponseQuantity)
router.get('/question/by/categorie/:categoryId', questionByUnicCategory)

router.post('/question/response/:userId/:questionId', response)
router.post('/question/create/:userId', create)

router.put('/question/response/rate/:userId/:responseId', rate)
router.put('/question/rate/:userId/:questionId', rateQuestion)

router.param('userId', userById)
router.param('questionId', questionById)
router.param('responseId', responseById)
router.param('categoryId', disciplineById)

module.exports = router