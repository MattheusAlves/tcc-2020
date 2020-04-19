const { errorHandler } = require("../helpers/dbErrorHandler");
const _ = require("lodash");

const Teacher = require("../models/teacher");



exports.createTeacher = async (req, res) => {
  const { cpf, rank } = req.body;
  // Transforma as disciplinas em um array, remove os espaços e capitaliza a primeira letra
  const studyFields = await req.body.studyFields
    .split(",")
    .map((field) => field.trim());

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
        console.log("teste");
        return res.status(400).json(errorHandler(err));
      }
      return res.status(200).json({ teacher });
    });
  } catch (err) {
    return res.status(400).json({ message: "Teacher saving error" });
  }
};

/**
 * Atualiza disciplinas de aulas do professor
 * Haverá uma forma de buscar todos as disciplinas disponíveis no frontend
 */

/**Atualiza os campos de estudo do professor
 *
 *
 */

exports.updateStudyFields = async (req, res) => {
  // Transforma as disciplinas em um array, remove os espaços e capitaliza a primeira letra
  let studyFields;
  try {
    studyFields = req.body.studyFields.split(",").map((field) => field.trim());
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
        message: "Teacher not found",
      });
    }

    //Checa se o usuário já possui o campo de estudo
    for (let j = 0; j < studyFields.length; j++) {
      for (let i = 0; i < teacher.studyFields.length; i++) {
        if (studyFields[j] == teacher.studyFields[i]) {
          //Remove the first element if j = 0
          j === 0 ? studyFields.shift() : studyFields.splice(j - 1, 1);
        }
      }
    }
    if (studyFields.length < 1) {
      return res
        .status(400)
        .json({ err: "User already has all these disciplines" });
    }

    teacher.studyFields = [...teacher.studyFields, ...studyFields];
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
