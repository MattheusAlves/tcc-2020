const { errorHandler } = require("../helpers/dbErrorHandler");
const _ = require("lodash");

const User = require("../models/user");
const Teacher = require("../models/teacher");

exports.userById = async (req, res, next, id) => {
  await User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: err,
      });
    }
    req.profile = user;
    next();
  });
};

exports.getProfile = async (req, res) => {
  const teacher = await Teacher.findOne({ user: req.query.id })
    .populate({
      path: "classes",
      populate: {
        path: "discipline",
      },
    })
    .populate({path:'user',select:{hashed_password:0,salt:0}})
    .exec();

  if (teacher) {
    return res.status(200).json(teacher);
  }

  return await User.findById(req.body.id || req.query.id)
    .populate("disciplines")
    .select({ hashed_password: 0, salt: 0 })
    .exec((error, user) => {
      if (error || !user) {
        console.log(error);
        return res.status(400).json({ error: error });
      }
      return res.status(200).json(user);
    });
};

/**
 * Atualiza as disciplinas do usuário
 */
exports.update = async (req, res) => {
  // Transforma as disciplinas em um array, remove os espaços e capitaliza a primeira letra

  const { disciplines } = req.body;

  if (disciplines.length < 1) {
    return res.status(400).json({ err: "incorrectly formatted disciplines" });
  }
  await User.findById(req.profile._id).exec(async (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    const selectDisciplines = [];
    console.log(user.disciplines);
    for (let i = 0; i < disciplines.length; i++) {
      if (user.disciplines.includes(disciplines[i]) === false)
        selectDisciplines.push(disciplines[i]);
    }
    console.log("select disciplines", selectDisciplines);
    if (!selectDisciplines[0]) {
      return res
        .status(402)
        .json({ Message: "User already has all these disciplines" });
    }
    user.disciplines = [...user.disciplines, ...selectDisciplines];
    await user.populate("disciplines").execPopulate();
    await user.save((err, user) => {
      if (err || !user) {
        return res.status(400).json(errorHandler(err));
      }
      user.hashed_password = "";
      user.salt = "";
      return res.status(200).json({ user, length: selectDisciplines.length });
    });
  });
};

exports.updateInformations = async (req, res) => {
  console.log(req.body);
  const { name, linkedin, github, phone } = req.body;
  await User.findById(req.profile._id).exec((err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json(errorHandler(err));
    }
    if (name) {
      user.name = name;
    } else if (linkedin) {
      user.linkedin = linkedin;
    } else if (github) {
      user.github = github;
    } else if (phone) {
      user.phone = phone;
    }
    user.save((err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).json(errorHandler(err));
      }
      return res.status(200).json(result);
    });
  });
};

exports.updateLocation = async (req, res) => {
  const coordinates = [...req.body.coordinates];
  User.findById(req.profile._id, (error, user) => {
    if (error) {
      return res.status(400).json(errorHandler(error));
    }
    user.location.coordinates = coordinates;
    user.save();
    return res.status(200).json(user);
  });
};
