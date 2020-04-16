const express = require('express')
const router = express.Router();

const {
    createTeacher,
       
} = require('../controllers/teacher')
const {
    disciplineById,
    createDiscipline,
    updateStudyFields,
} = require('../controllers/discipline')

const {
    requireSignin,
    isAuth,
} = require("../controllers/auth");

const {userById} = require("../controllers/user");

router.post('/teacher/create/:userId',requireSignin,isAuth, createTeacher)
router.post('/teacher/update/disciplines/:userId',requireSignin,isAuth, updateStudyFields)
router.post('/teacher/create/disciplines/:userId',requireSignin,isAuth,/**addisTeacher */ createDiscipline)


router.param('disciplineId', disciplineById)
router.param('userId',userById)
module.exports = router