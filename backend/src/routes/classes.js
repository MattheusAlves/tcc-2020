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
const { teacherById } = require("../controllers/teacher");

router.post("/classes/create/:userId/:teacherId", createClasses);

router.get("/classes/by/location/:userId", classesByLocation);
router.get("/classes/all", allClasses);
router.get("/classes/by/teacher/:teacherId", classesByTeacher);

router.put("/classes/update/:userId/:teacherId", updateClass);

router.delete("/class/delete/:classId", deleteClass);

//middlewares
router.param("userId", userById);
router.param("teacherId", teacherById);
router.param("classId", classById);

module.exports = router;
