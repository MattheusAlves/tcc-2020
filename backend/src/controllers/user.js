const { errorHandler } = require("../helpers/dbErrorHandler");

const User = require("../models/user");

exports.userById = async (req, res, next, id) => {
  await User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: user,
      });
    }
    req.profile = user;
    next();
  });
};

/**
 * Atualiza as disciplinas do usuário
 */
exports.updateDiscipline = async (req, res) => {
  await User.findById(req.profile._id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    if (
      user.disciplines &&
      user.disciplines.indexOf(req.discipline._id) != -1
    ) {
      return res.status(200).json({
        message: "User already has this discipline",
      });
    } else if (user.disciplines) {
      user.disciplines = [...user.disciplines, req.discipline._id];
    } else {
      user.disciplines = [req.discipline._id];
    }

    user.save((err, user) => {
      if (err || !user) {
        return res.status(400).json(errorHandler(err));
      }

      return res.status(200).json({ user });
    });
  });
};
