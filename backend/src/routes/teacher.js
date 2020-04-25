const express = require('express')
const router = express.Router()
const { requireSignin, isAuth } = require('../controllers/auth')
const { userById } = require('../controllers/user')

const {
    create,
    update,
    createStudyFields,
    oneMoreStudent,
    oneLessStudent,
    evaluationTeacher
} = require('../controllers/teacher')

const {
    disciplineById
} = require('../controllers/discipline')


router.post('/teacher/create/:userId',requireSignin,isAuth, create)

router.post('/teacher/create/disciplines/:userId',requireSignin,isAuth,/**addisTeacher */ createStudyFields)
router.post('/teacher/oneMoreStudent/:userId', requireSignin,isAuth, oneMoreStudent)
router.post('/teacher/oneLessStudent/:userId', requireSignin,isAuth, oneLessStudent)
router.post('/teacher/avaliationTeacher/:userId', requireSignin,isAuth, evaluationTeacher)


router.post(
    '/teacher/update/disciplines/:userId',
    requireSignin,
    isAuth,
    update
  )
  

router.param('userId',userById)
router.param('disciplineId', disciplineById)
module.exports = router

