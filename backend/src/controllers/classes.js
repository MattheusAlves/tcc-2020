const { errorHandler } = require("../helpers/dbErrorHandler");
const Classes = require('../models/classes');
const Teacher = require('../models/teacher')


exports.createClasses = async (req, res) => {
    const { discipline, hourClassPrice } = req.body
    const classStoraged = await new Classes({
        discipline,
        hourClassPrice
    })
    classStoraged.save((error, savedClass) => {
        if (error || !savedClass) {
            return res.status(400).json({ err: error })
        }
        res.status(200).json(classStoraged)
    })

}

exports.classesByLocation = async (req, res) => {

}
// Pesquisar professores proximos -> Trazer Aula de professores próximos