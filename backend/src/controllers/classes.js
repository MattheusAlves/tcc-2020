const { errorHandler } = require("../helpers/dbErrorHandler");
const Classes = require('../models/classes');
const Teacher = require('../models/teacher');
const User = require('../models/user')
const mongoose = require('mongoose');

exports.createClasses = async (req, res) => {
    const { discipline, hourClassPrice, teacher } = req.body
    const classe = await Classes.find({ teacher: teacher, discipline: discipline }).exec()
    if (classe != '') {
        return res.status(400).json({ message: "Teacher already has this class" })
    }
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

    if (req.body.coordinates) {
        //only in insomnia
        var { coordinates, limit, distance, disciplineToSearch } = req.body
    } else {
        var coordinates = JSON.parse(req.query.coordinates)
        var limit = JSON.parse(req.query.limit)
        var distance = JSON.parse(req.query.distance)
        var disciplineToSearch = req.query.disciplineToSearch ? JSON.parse(req.query.disciplineToSearch) : ''
    }

    console.log("distancia:", distance)
    console.log('limit', limit)
    console.log('coordinates', coordinates)
    //selects all nearby teachers
    let teachers = await Teacher.aggregate([
        {
            $geoNear: {
                near: {
                    type: "Point",
                    //always <longitude>,<latitude>
                    "coordinates": [coordinates.longitude, coordinates.latitude]
                },
                maxDistance: distance,
                spherical: true,
                distanceField: "distance",
                // "distanceMultiplier": 0.000621371 // multiplicador distance metros para milhas
            }
        },
        {
            $project: {
                'pupils': 0,
                'cpf': 0,
                'bio': 0,
                'user': 0,
                'createdAt': 0,
                'updatedAt': 0,
                'location': 0
            }

        }
    ]).exec()

    console.log(teachers)

    teachersId = teachers.map((teacher) => teacher._id)

    let disciplines = new Array()
    if (!disciplineToSearch) {
        console.log('entrou')
        const userDisciplines = await User.find(req.profile._id)
            .select('disciplines')
            .select('-_id')
            .exec()
        disciplines = userDisciplines[0].disciplines.map((discipline) => discipline)
    } else {
        disciplines = disciplineToSearch.map((discipline) => mongoose.Types.ObjectId(discipline))
    }

    console.log('teacher', teachers)
    console.log('disciplinas', disciplines)
    await Classes.aggregate(
        [

            {
                $match: {
                    teacher: {
                        $in: teachersId
                    },
                    discipline: {
                        $in: disciplines,

                    },

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
            { $unwind: "$teacher" },
            {
                $lookup: {
                    from: 'users',
                    localField: 'teacher.user',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            { $unwind: "$user" },
            {
                $lookup: {
                    from: "disciplines",
                    localField: 'discipline',
                    foreignField: '_id',
                    as: 'discipline'
                }
            },
            { $unwind: "$discipline" },
            {
                $limit: limit
            },
            {
                $project: {
                    'teacher.updatedAt': 0,
                    'teacher.__v': 0,
                    'teacher.location': 0,
                    'teacher.bio': 0,
                    'teacher.cpf': 0,
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
            },

        ]
    ).exec((error, result) => {
        if (error || !result) {
            if (error) {
                console.log(error)
                return res.status(400).json(errorHandler(error))
            }

            return res.status(404).json({ Error: 'Not found' })
        }

        for (let i = 0; i < result.length; ++i) {
            for (let j = 0; j < teachers.length; ++j) {
                if (result[i].teacher._id.toString() == teachers[j]._id.toString()) {
                    result[i].teacher.distance = Math.round(teachers[j].distance)
                }
            }
        }
        return res.status(200).json(result)
    })


}

exports.classById = async (req, res) => {
    const { id } = req.query.id ? req.query : req.body
    await Classes.findById(id)
        .populate('teacher')
        .exec((err, result) => {
            if(err || !result){
                return res.status(400).json({error:errorHandler(err)})
            }
            return res.status(200).json(resultF)
        })
}
exports.allClasses = async (req, res) => {

    await Classes.find().exec((error, result) => {
        return res.status(200).json(result)
    })

}