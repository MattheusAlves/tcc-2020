const express = require("express");
const router = express.Router();

const {
      requireSignin,
      isAuth,
 } = require("../controllers/auth");

const {userById,updateDiscipline} = require("../controllers/user");

router.get('/secret/:userId',requireSignin,isAuth,   (req,res) => {
    res.json({
        user:req.profile
    })
})
router.post('/update/disciplines/:userId',requireSignin,isAuth,  updateDiscipline)

router.param('userId', userById)

module.exports = router;