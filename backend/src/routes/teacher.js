const express = require("express");
const router = express.Router();

const {
  create,
  update,
  teachersByLocation,
  updateInformations,
  teacherByUserId,
} = require("../controllers/teacher");

const { requireSignin, isAuth } = require("../controllers/auth");

const { userById } = require("../controllers/user");

router.post("/teacher/create/:userId", create);
router.post(
  "/teacher/update/disciplines/:userId",
  requireSignin,
  isAuth,
  update
);

router.put("/teacher/update/informations/:teacherByUserId", updateInformations);

router.get("/teacher/by/location/:userId", teachersByLocation);
//buscar geolocation do usuario e trazer professores que estão perto

router.param("userId", userById);
router.param("teacherByUserId", teacherByUserId);
module.exports = router;
