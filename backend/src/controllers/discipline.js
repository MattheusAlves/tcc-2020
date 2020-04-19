const _ = require("lodash");
const { errorHandler } = require("../helpers/dbErrorHandler");

const Discipline = require("../models/discipline");

exports.disciplineById = (req, res, next, id) => {
  Discipline.findById(id).exec((err, discipline) => {
    if (err || !discipline) {
      return res.status(400).json({
        error: "Discipline not found",
      });
    }
    req.discipline = discipline;
    next();
  });
};

/**
 * method for list all disciplines
 */
exports.removeStudyFields = async (req, res) => {};

exports.createDiscipline = async (req, res) => {
  const discipline = new Discipline(req.body);
  await discipline.save((err, discipline) => {
    if (err || !discipline) {
      return res.status(400).json(errorHandler(err));
    }
    return res.status(200).json({
      discipline,
    });
  });
};
