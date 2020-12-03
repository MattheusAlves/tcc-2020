const express = require("express");
const router = express.Router();

const {
  create,
  enrollById,
  enrollsByClass,
  enrollsByTeacher,
  enrollsQuantityByClass,
  enrollmentActiveByTeacher,
  approveEnrollment,
  disapproveEnrollment,
  remove,
} = require("../controllers/enrollment");
const { userById } = require("../controllers/user");
const { classById } = require("../controllers/classes");
const { teacherById, teacherByUserId } = require("../controllers/teacher");

router.post("/enrollment/create/:userId/:classId", create);

router.put('/enrollment/approve/:teacherByUserId/:enrollmentId', approveEnrollment);

router.get("/enrollment/by/class", enrollsByClass);
router.get("/enrollment/by/teacher/:teacherByUserId", enrollsByTeacher);
router.get(
  "/enrollment/by/class/quantity/:enrollmentId",
  enrollsQuantityByClass
);
router.get('/enrollment/active/by/teacher/:teacherByUserId',enrollmentActiveByTeacher)

router.delete("/enrollment/remove/:userId/:classId", remove);
router.delete('/enrollment/disapprove/:teacherByUserId/:enrollmentId',disapproveEnrollment);

router.param("enrollmentId", enrollById);
router.param("userId", userById);
router.param("classId", classById);
router.param("teacherId", teacherById);
router.param("teacherByUserId", teacherByUserId);

module.exports = router;
