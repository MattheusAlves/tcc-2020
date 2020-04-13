const User = require("../models/user");
const Discipline = require("../models/discipline");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.userById = async (req, res, next, id) => {
  await User.findById(id).exec((err, user) => {
    if (err || !user) {
      console.log(id)
      console.log("Useeer ->>>", user)
      return res.status(400).json({
        error: user
      });
    }
    req.profile = user;
    next();
  });
};

