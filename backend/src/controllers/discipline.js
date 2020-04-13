const Discipline = require("../models/discipline");
const User = require('../models/user')
const { errorHandler } = require("../helpers/dbErrorHandler");


exports.disciplineById = (req, res, next, id) => {
    Discipline.findById(id).exec((err, discipline) => {
        if (err || !discipline) {
            return res.status(400).json({
                error: "Discipline not found"
            })
        }
        req.discipline = discipline
        next()
    })


}

/**
 * method for list all disciplines
 */
exports.removeStudyFields = async (req, res) => { };

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


/**
* Atualiza disciplinas de aulas do professor
* Haverá uma forma de buscar todos as disciplinas disponíveis no frontend
*/
exports.updateStudyFields = async (req, res) => {
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


exports.updateDiscipline = async (req, res) => {
    await User.findById(req.profile._id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found",
            });
        }

        if (user.disciplines && user.disciplines.indexOf(req.discipline._id) != -1) {

            return res.status(200).json({
                message: "User already has this discipline",
            });
        } else if (user.disciplines) {
            user.disciplines = [...user.disciplines, req.discipline._id];
        } else {
            user.disciplines = [req.discipline._id]
        }

        user.save((err, user) => {
            if (err || !user) {
                return res.status(400).json(errorHandler(err));
            }

            return res.status(200).json({ user });
        });
    });
};
