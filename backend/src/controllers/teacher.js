const { errorHandler } = require("../helpers/dbErrorHandler");
const _ = require("lodash");

const Teacher = require("../models/teacher");
const User = require("../models/user");
const Classes = require("../models/classes");

exports.create = async (req, res) => {
  const { cpf, rank, bio, location } = req.body;

  const teacher = await new Teacher({
    cpf,
    rank,
    bio,
    location,
    user: req.profile._id,
  });

  await teacher.save((err, teacher) => {
    if (err || !teacher) {
      console.log(err)
      return res.status(400).json(errorHandler(err));
    }
    User.findOneAndUpdate(
      { _id: req.profile._id },
      { teacher: true },
      {
        new: true,
      }
    ).then((error, updatedUser) => {
      if (error || !updatedUser) {
        return console.log(error);
      }
      console.log(updatedUser);
    });

    return res.status(200).json(teacher);
  });
};

/**
 * Atualiza disciplinas de aulas do professor
 * Haverá uma forma de buscar todos as disciplinas disponíveis no frontend
 */

/** Atualiza os campos de estudo do professor
 *
 *
 */

exports.update = async (req, res) => {
  // Transforma as disciplinas em um array, remove os espaços e capitaliza a primeira letra
  let studyFields;
  if (req.body.studyFields) {
    try {
      studyFields = req.body.studyFields
        .split(",")
        .map((field) => field.trim());
    } catch (err) {
      return res.status(400).json({
        Err: "incorrectly formatted study fields",
      });
    }
  }
  if (studyFields) {
    // return res.status(400).json({ err: "incorrectly formatted study fields" });

    for (let i = 0; i < studyFields.length; i++) {
      if (studyFields[i].length < 3 || !_.isString(studyFields[i])) {
        return res.status(400).json({
          err: "incorrectly formatted or undefined study fields",
        });
      }
    }
  }

  await Teacher.findOne({ user: req.profile._id }, (err, teacher) => {
    if (err || !teacher) {
      return res.status(400).json({
        message: "Teacher not found",
      });
    }
    if (studyFields) {
      // Checa se o usuário já possui o campo de estudo
      for (let j = 0; j < studyFields.length; j++) {
        for (let i = 0; i < teacher.studyFields.length; i++) {
          if (studyFields[j] === teacher.studyFields[i]) {
            // Remove the first element if j = 0
            j === 0 ? studyFields.shift() : studyFields.splice(j - 1, 1);
          }
        }
      }
      if (studyFields.length < 1) {
        return res
          .status(400)
          .json({ err: "User already has all these disciplines" });
      }
    }
    const { rank } = req.body;
    teacher.rank = rank;
    studyFields
      ? (teacher.studyFields = [...teacher.studyFields, ...studyFields])
      : "";
    teacher.populate("studyFields").execPopulate();
    teacher.save((err, teacher) => {
      if (err || !teacher) {
        return res.status(400).json({ err });
      }
      return res.status(200).json({
        teacher,
      });
    });
  });
};

exports.updateInformations = async (req, res) => {
  console.log(req.teacher)
  await Teacher.findById(req.teacher._id).exec((err, teacher) => {
    if(err || !teacher) {
      console.log(err)
      if(err)
      return res.status(400).json(errorHandler(err))
      else
      return res.status(404).json({error:'Teacher not found'})
    }
  
    if(req.body.bio){
      teacher.bio = req.body.bio
    }else if(req.body.academicFormation){
      teacher.academicFormation = req.body.academicFormation
    }
    teacher.save((err,result) => {
      if(err){
        console.log(err)
        return res.status(400).json(errorHandler(err))
      }
      return res.status(200).json({message:'Teacher successfully updated'})
    })
  });
};

//mover para users by location
exports.teachersByLocation = async (req, res) => {
  const coordinates = [...req.profile.location.coordinates];
  await User.findOne({
    location: {
      $near: {
        $maxDistance: 2000,
        $geometry: {
          type: "Point",
          coordinates,
        },
      },
    },
    teacher: true,
    _id: { $ne: req.profile._id },
  }).find((error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).json(errorHandler(error));
    }
    console.log(results);
    return res.status(200).json({ results });
  });
};

exports.teacherById = async (req, res, next, id) => {
  await Teacher.findById(id).exec((err, result) => {
    if (err) {
      return res.status(400).json({ err: errorHandler(err) });
    } else if (!result) {
      return res.status(400).json({ err: "Teacher not found" });
    }
    req.teacher = result;
    next();
  });
};

exports.teacherByUserId = async(req,res,next,id) => {
  await Teacher.findOne({user:id}).exec((err,teacher) => {
    if(err){
      console.log(err)
      return res.status(400).json(errorHandler(err))
    }
    req.teacher = teacher
    next()

  })
}