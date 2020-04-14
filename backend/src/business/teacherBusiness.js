const Teacher = require("../models/teacher");
const Discipline = require("../models/discipline");
const { errorHandler } = require("../helpers/dbErrorHandler");
const _ = require("lodash");


module.exports.createTeacher = async (req, res) => {
  const { cpf, rank } = req.body;
  // Transforma as disciplinas em um array, remove os espaços e capitaliza a primeira letra
  const studyFields = await req.body.studyFields
    .split(",")
    .map((field) => field.trim().charAt(0).toUpperCase() + field.slice(1));

  try {
    if (!studyFields) {
      return res.status(400).json({ message: "Undefined fields for study" });
    }

    const teacher = await new Teacher({
      cpf,
      rank,
      studyFields,
      user: req.profile._id,
    });

    await teacher.save((err, teacher) => {
      if (err || !teacher) {
        return res.status(400).json(errorHandler(err));
      }
      return res.status(200).json({ teacher });
    });
  } catch (err) {
    return res.status(400).json({ message: "Teacher saving error" });
  }
};


module.exports.updateStudyFields = async (req, res) => {
  // Transforma as disciplinas em um array, remove os espaços e capitaliza a primeira letra
  let studyFields;
  try {
    studyFields = req.body.disciplines
      .split(",")
      .map((field) => field.trim().charAt(0).toUpperCase() + field.slice(1));
  } catch (err) {
    return res.status(400).json({
      Err: "incorrectly formatted study fields",
    });
  }

  if (!studyFields) {
    return res.status(400).json({ err: "incorrectly formatted study fields" });
  } else {
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
        message: "Cannot find teacher! Wrong id",
      });
    }

    teacher.studyFields = [...teacher.studyFields, ...studyFields];
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

module.exports.removeStudyFields = async (req, res) => { };

module.exports.createStudyFields = async (req, res) => {
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

module.exports.oneMoreStudent = async (req, res) => {
  let teacher = new Teacher();
  // teste mockado
  /*
  teacher.student = 4
  teacher.rank = 1
  */

  teacher.student++
  teacher.rank += (0.2 * teacher.student)
  return res.status(200).json({ rank: teacher.rank, students: teacher.student });
};

module.exports.oneLessStudent = async (req, res) => {
  let teacher = new Teacher();
  // teste mockado
  /*
  teacher.student = 5
  teacher.rank = 1
  */
  if (teacher.student > 0) {
    teacher.student--
    teacher.rank -= 0.2
    return res.status(200).json({ rank: teacher.rank, students: teacher.student });
  } else {
    return res.status(200).json({ message: "Não há estudante linkado com esse professor." });
  }
};

module.exports.evaluationTeacher = async (req, res) => {
  let teacher = new Teacher();
  const { evaluation } = req.body;
  //test mockado below
  //teacher.rank = 10
  
  if (!evaluation) {
    return res.status(400).json({ message: "Undefined field for evaluation" });
  } else {
    if (evaluation < 0 || evaluation > 10)
      return res.status(400).json({ message: "Evaluation out of range 0 - 10" });
    else {
      const evaluationFinal = evaluation / 2
      teacher.evaluation = evaluationFinal
      teacher.rank += evaluationFinal
      return res.status(200).json({ evaluationFinal: teacher.evaluation ,rank:teacher.rank });
    }
  }
}






