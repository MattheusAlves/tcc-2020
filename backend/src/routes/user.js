const express = require("express");
const router = express.Router();

const { requireSignin, isAuth } = require("../controllers/auth");
const { disciplineById } = require("../controllers/discipline");

const {
  userById,
  update,
  updateLocation,
  getProfile,
  updateInformations,
  getUser,
} = require("../controllers/user");

router.get("/secret/:userId", requireSignin, isAuth, (req, res) => {
  res.json({
    user: req.profile,
  });
});
router.get("/user/profile", getProfile);
router.get('/user/get/:userId',getUser)

router.put(
  "/update/disciplines/:userId",
  // requireSignin,
  // isAuth,
  update
);
router.put("/update/location/:userId", updateLocation);
router.put('/update/informations/:userId', updateInformations);

router.param("userId", userById);
router.param("disciplineId", disciplineById);

module.exports = router;
