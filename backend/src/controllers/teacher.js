const Teacher = require("../models/teacher");
const Discipline = require("../models/discipline");
const { errorHandler } = require("../helpers/dbErrorHandler");
const _ = require("lodash");

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
        console.log("teste")
        return res.status(400).json(errorHandler(err));
      }
      return res.status(200).json({ teacher });
    });
  } catch (err) {
    return res.status(400).json({ message: "Teacher saving error" });
  }
};



