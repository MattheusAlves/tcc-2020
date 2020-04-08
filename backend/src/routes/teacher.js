const express = require('express')
const router = express.Router();

const {
    createTeacher
} = require('../controllers/teacher')

const {userById} = require("../controllers/user");

router.post('/teacher/create/:userId', createTeacher)

router.param('userId',userById)
module.exports = router