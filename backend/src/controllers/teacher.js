const Teacher = require('../models/teacher')
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.createTeacher = async (req, res) => {
    const { cpf, rank } = req.body
    // Transforma as disciplinas em um array e remove os espaços
    const studyFields = await req.body.studyFields.split(',').map(field => field.trim())

    try {

        if (!studyFields) {
            return res.status(400).json({ message: "Undefined fields for study" })
        }

        const teacher = await new Teacher({ cpf, rank, studyFields, user: req.profile._id })

        await teacher.save((err, teacher) => {
            if (err || !teacher) {
                return res.status(400).json(errorHandler(err) )
            }
            return res.status(200).json({ teacher })
        })
    } catch (err) {
        return res.status(400).json({ message: "Teacher saving error" })
    }



}
/**
 * Atualiza disciplinas de aulas do professor
 * Haverá uma forma de buscar todos as disciplinas disponíveis no frontend
 */
exports.updateStudyFields = async (req,res) => {
    const studyFields = req.body.disciplines.split(',').map(field => field.trim())
    if (!studyFields) {
        return res.status(400).json({ message: "Undefined fields for study" })
    }
    await Teacher.findOne({user:req.profile._id},(err,teacher) => {
        teacher.disciplines.push(req.disciplines)
        teacher.save((err,teacher) => {
            if(err || !teacher){
                return res.status(200).json({err})
            }
            return res.status(200).json({
                teacher
            })
        })
    })
}
