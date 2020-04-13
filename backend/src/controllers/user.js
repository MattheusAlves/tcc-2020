const User = require("../models/user");
const Discipline = require("../models/discipline");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.userById = async (req, res, next, id) => {
  await User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    req.profile = user;
    next();
  });
};

exports.updateDiscipline = async (req, res) => {
  await User.findById(req.profile._id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    if (user.disciplines.indexOf(req.discipline._id) != -1) {
      return res.status(200).json({
        message: "User already has this discipline",
      });
    }

    user.disciplines = [...user.disciplines, req.discipline._id];

    user.save((err, user) => {
      if (err || !user) {
        return res.status(400).json(errorHandler(err));
      }

      return res.status(200).json({ user });
    });
  });
};
