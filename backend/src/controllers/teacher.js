const Teacher = require('../models/teacher')
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.createTeacher = async (req, res) => {
    const { cpf, rank } = req.body
    // Transforma as disciplinas em um array e remove os espaços
    const studyFields = await req.body.studyFields.split(',').map(field => field.trim())

    try {

        if (!studyFields) {
            return res.status(400).json({ message: "Undefined fields os study" })
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
