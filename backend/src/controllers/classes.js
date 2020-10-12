const { errorHandler } = require("../helpers/dbErrorHandler");
const Classes = require('../models/classes');
const Teacher = require('../models/teacher');


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

    const { coordinates, limit, distance } = req.query.coordinates ? req.query : req.body

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
    console.log(teachers)

    teachers = teachers.map((teacher) => teacher._id)

    await Classes.aggregate(
        [
           
            {
                $match: {
                    teacher: {
                        $in: teachers
                    }
                },
            },
            {
                $lookup: {
                    from: 'teachers',
                    localField: 'teacher',
                    foreignField: '_id',
                    as: 'teacher'
                }
            },
            {$unwind:"$teacher"},
            {
                $lookup: {
                    from: 'users',
                    localField: 'teacher.user',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {$unwind:"$user"},
            {
                $lookup: {
                    from: "disciplines",
                    localField: 'discipline',
                    foreignField: '_id',
                    as: 'discipline'
                }
            },
            {$unwind:"$discipline"},
            {
                $project: {
                    'teacher.updatedAt': 0,
                    'teacher.__v': 0,
                    'teacher.location': 0,
                    'user.hashed_password': 0,
                    'user.birthDate': 0,
                    'user.updatedAt': 0,
                    'user.createdAt': 0,
                    'user.disciplines': 0,
                    'user.salt': 0,
                    'user.__v': 0,
                    '__v': 0,
                    'discipline.createdAt': 0,
                    'discipline.updatedAt': 0,
                    'discipline.relatedDisciplines': 0,
                    'discipline.__v': 0


                }
            }
        ]
    ).exec((error, result) => {
        if (error || !result) {
            if (error) {
                return res.status(400).json(errorHandler(error))
            }
            return res.status(404).json({ Error: 'Not found' })
        }
        return res.status(200).json(result)
    })


}
// Pesquisar professores proximos -> Trazer Aula de professores próximos

exports.allClasses = async(req,res) => {

    await Classes.find().exec((error,result) => {
        return res.status(200).json(result)
    })

}