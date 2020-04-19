const express = require("express");
const router = express.Router();

const { requireSignin, isAuth } = require("../controllers/auth");
const { disciplineById } = require("../controllers/discipline");

const { userById, updateDiscipline } = require("../controllers/user");


router.get("/secret/:userId", requireSignin, isAuth, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.post(
  "/update/disciplines/:userId/:disciplineId",
  requireSignin,
  isAuth,
  updateDiscipline
);

router.param("userId", userById);
router.param("disciplineId", disciplineById);

module.exports = router;
