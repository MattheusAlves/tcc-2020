const { errorHandler } = require("../helpers/dbErrorHandler");
const Classes = require('../models/classes');
const teacher = require("../models/teacher");
const Teacher = require('../models/teacher');
const User = require('../models/user')
const { unsubscribe } = require("../routes/classes");


exports.createClasses = async (req, res) => {
    const { discipline, hourClassPrice, teacher } = req.body
    const classStoraged = await new Classes({
        discipline,
        teacher,
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

    const { coordinates, limit, distance } = req.body


    let teachers = await Teacher.find({
        location: {
            $near: {
                $maxDistance: distance,
                $geometry: {
                    type: 'Point',
                    coordinates: coordinates
                },
            }
        },
    })
        .limit(parseInt(limit, 10))
        .select('_id')
        .exec()

    teachers = teachers.map((teacher) => teacher._id)

    await Classes.aggregate(
        [{
            $match: {
                teacher: {
                    $in: teachers
                }
            }
        }]
    ).exec((error, result) => {
        if (error || !result) {
            if (error) {
                return res.status(400).json(errorHandler(error))
            }
            return res.status(404).json({ Error: 'Not found' })
        }
        return res.status(200).json(result)
    })



    //     .populate({
    //         path: 'user',
    //         select: {
    //             'salt': 0,
    //             'updatedAt': 0,
    //             'github': 0,
    //             'linkedin': 0,
    //             'phone': 0,
    //             'hashed_password': 0,
    //             // 'createdAt': 0
    //         }
    //     })
    //     .populate({
    //         path: 'classes',
    //         populate: {
    //             path: 'discipline',
    //         },
    //     })
    //     .limit(parseInt(limit, 10))
    //     .select({ "bio": 0, 'updatedAt': 0 })
    //     .exec((err, classe) => {
    //         if (err || !classe) {
    //             if (err) {
    //                 console.log(err)
    //                 return res.status(400).json({ error: err })
    //             }
    //             else {
    //                 return res.status(404).json({ erorr: 'classes not found' })
    //             }
    //         }
    //         return res.status(200).json(classe)

    //     })

}
// Pesquisar professores proximos -> Trazer Aula de professores próximos