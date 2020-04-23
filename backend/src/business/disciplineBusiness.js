const { errorHandler } = require("../helpers/dbErrorHandler");
const Discipline = require("../models/discipline");

module.exports.create = async (req, res) => {
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

module.exports.disciplineById = (req, res, next, id) => {
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

module.exports.list = async (req, res) => {
  Discipline.find()
    .sort("disciplineName")
    .exec((err, disciplines) => {
      if (err || !disciplines) {
        return res.status(400).json({ error: errorHandler(err) });
      }
      return res.status(200).json({ disciplines });
    });
};
/**
 * method for list all disciplines
 */
module.exports.remove = async (req, res) => {
  const discipline = req.discipline;
  discipline.remove((err, deletedDiscipline) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    return res
      .status(200)
      .json({ deletedDiscipline, message: "Discipline deleted succesfully" });
  });
};
