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
router.post('/update/disciplines/:userId',/**add requiresignin and isauth */  updateDiscipline)

router.param('userId', userById)

module.exports = router;