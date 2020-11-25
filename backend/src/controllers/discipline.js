const { errorHandler } = require("../helpers/dbErrorHandler");

const Discipline = require("../models/discipline");
const User = require("../models/user");

exports.create = async (req, res) => {
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

exports.disciplineById = (req, res, next, id) => {
  console.log("chegou");
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

exports.list = async (req, res) => {
  const { limit } = req.query;
  console.log(limit);
  Discipline.find()
    .sort("disciplineName")
    .limit(parseInt(limit))
    .exec((err, disciplines) => {
      if (err || !disciplines) {
        console.log(err);
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      return res.status(200).json({
        disciplines,
      });
    });
};
/**
 * method for list all disciplines
 */
exports.remove = async (req, res) => {
  const discipline = req.discipline;
  discipline.remove((err, deletedDiscipline) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    return res.status(200).json({
      deletedDiscipline,
      message: "Discipline deleted succesfully",
    });
  });
};

//autocomplete INPUT
exports.searchDisciplines = async (req, res) => {
  const query = req.query.disciplineName;
  console.log();
  console.log(query);
  if (query.length < 3) {
    return res.status(200).json([]);
  }
  await Discipline.find({
    $or: [
      { disciplineName: query.toUpperCase() },
      { disciplineName: new RegExp("^"+query + ".*", "i") },
      // { disciplineName: new RegExp(query, "i") },
    ],
  })
    .select("disciplineName")
    .sort("disciplineName")
    .limit(8)
    .exec((error, result) => {
      if (error) {
        return res.status(400).json({
          error: errorhandler(error),
        });
      } else {
        console.log(result);
        return res.status(200).json(result);
      }
    });
};

exports.disciplinesByUser = async (req, res) => {
  User.findById(req.profile._id)
    .select("disciplines")
    .populate("disciplines")
    .exec((error, user) => {
      if (error) {
        console.log(error);
        return res.status(400).json(errorHandler(error));
      }
      return res.status(200).json(user);
    });
};
