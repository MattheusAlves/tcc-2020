const express = require("express");
const router = express.Router();

const {
  createClasses,
  classesByLocation,
  allClasses,
  classById,
  classesByTeacher,
  deleteClass,
  updateClass,
} = require("../controllers/classes");
const { userById } = require("../controllers/user");
const { requireSignin, isAuth } = require("../controllers/auth");
const { teacherById,teacherByUserId } = require("../controllers/teacher");

router.post("/classes/create/:teacherByUserId", createClasses);

router.get("/classes/by/location/:userId", classesByLocation);
router.get("/classes/all", allClasses);
router.get("/classes/by/teacher/:teacherByUserId", classesByTeacher);

router.put("/classes/update/:teacherByUserId", updateClass);

router.delete("/class/delete/:classId", deleteClass);

//middlewares
router.param("userId", userById);
router.param("teacherId", teacherById);
router.param("classId", classById);
router.param('teacherByUserId',teacherByUserId);
module.exports = router;
