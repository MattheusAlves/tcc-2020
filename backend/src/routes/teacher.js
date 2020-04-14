const express = require('express')
const router = express.Router();

const {
    createTeacher,
    updateStudyFields,
    createStudyFields,
    oneMoreStudent,
    oneLessStudent,
    evaluationTeacher
} = require('../controllers/teacher')
const {
    disciplineById
} = require('../controllers/discipline')

const {
    requireSignin,
    isAuth,
} = require("../controllers/auth");

const {userById} = require("../controllers/user");

router.post('/teacher/create/:userId',requireSignin,isAuth, createTeacher)
router.post('/teacher/update/disciplines/:disciplineId/:userId',requireSignin,isAuth, updateStudyFields)
router.post('/teacher/create/disciplines/:userId',requireSignin,isAuth,/**addisTeacher */ createStudyFields)
router.post('/teacher/oneMoreStudent/:userId', requireSignin,isAuth, oneMoreStudent)
router.post('/teacher/oneLessStudent/:userId', requireSignin,isAuth, oneLessStudent)
router.post('/teacher/avaliationTeacher/:userId', requireSignin,isAuth, evaluationTeacher)

router.param('userId',userById)
router.param('disciplineId', disciplineById)
module.exports = router