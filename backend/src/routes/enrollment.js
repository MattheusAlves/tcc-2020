const express = require('express')
const router = express.Router()

const { create, enrollById, enrollsByClass, enrollsByTeacher, enrollsQuantityByClass, remove } = require('../controllers/enrollment')
const { userById } = require('../controllers/user')
const { classById } = require('../controllers/classes')
const { teacherById } = require('../controllers/teacher')

router.post('/enrollment/create/:userId/:classId', create)

router.get('/enrollment/by/class', enrollsByClass)
router.get('/enrollment/by/teacher/:teacherId', enrollsByTeacher)
router.get('/enrollment/by/class/quantity/:enrollmentId', enrollsQuantityByClass)

router.delete('/enrollment/remove/:userId/:classId', remove)

router.param('enrollmentId', enrollById)
router.param('userId', userById)
router.param('classId', classById)
router.param('teacherId', teacherById)

module.exports = router