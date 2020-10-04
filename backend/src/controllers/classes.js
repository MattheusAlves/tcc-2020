const { errorHandler } = require("../helpers/dbErrorHandler");
const Classes = require('../models/classes');
const Teacher = require('../models/teacher');
const User = require('../models/user')
const { unsubscribe } = require("../routes/classes");


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

    const { coordinates, limit, distance, disciplines } = req.query
    console.log(coordinates)
    console.log(limit)
    console.log(distance)
    const teachers = await Classes.find({
        discipline: { $in: disciplines }

        //da pra fzr se adicinar teacher em classes
    })

    await Teacher.find({
        location: {
            $near: {
                $maxDistance: 10000,
                $geometry: {
                    type: 'Point',
                    coordinates: coordinates
                },
            }
        },
        
    })
        .populate({
            path: 'user',
            select: {
                'salt': 0,
                'updatedAt': 0,
                'github': 0,
                'linkedin': 0,
                'phone': 0,
                'hashed_password': 0,
                // 'createdAt': 0
            }
        })
        .populate({
            path: 'classes',
            populate: {
                path: 'discipline',
            },
        })
        .limit(parseInt(limit, 10))
        .select({ "bio": 0, 'updatedAt': 0 })
        .exec((err, classe) => {
            if (err || !classe) {
                if (err) {
                    console.log(err)
                    return res.status(400).json({ error: errorHandler(err) })
                }
                else {
                    return res.status(404).json({ erorr: 'classes not found' })
                }
            }
            console.log(classe)
            return res.status(200).json(classe)

        })

}
// Pesquisar professores proximos -> Trazer Aula de professores próximos