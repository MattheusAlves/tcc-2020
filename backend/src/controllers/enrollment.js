const { errorHandler } = require("../helpers/dbErrorHandler");
const enrollment = require("../models/enrollment");

const Enrollment = require('../models/enrollment')

exports.create = async (req, res) => {

    const { goals, hour } = req.body
    if (!(req.body.days)) {
        return res.status(400).json({ err: 'Days are required' })
    }
    const days = await req.body.days.map(day => day.charAt(0).toUpperCase() + day.slice(1))

    const enrollment = new Enrollment({
        class: req.class._id,
        user: req.profile._id,
        goals,
        days,
        hour,
        hourClassPrice: req.class.hourClassPrice
    })

    await Enrollment.find({ class: req.class._id, user: req.profile._id })
        .exec(async (err, result) => {
            if (err) {
                return res.status(400).json({ err: errorHandler(err) })
            }
            if (result != '') {
                console.log(result)
                return res.status(304).json({ err: 'User is already enrolled in this class' })
            }

            await enrollment.save((err, enroll) => {
                if (err || !enroll) {
                    return res.status(400).json({ err: errorHandler(err) })
                }
                console.log('Exec here')
                return res.status(200).json(enroll)
            })
        })

}

exports.remove = async (req, res) => {
    await Enrollment.deleteOne({ class: req.class._id, user: req.profile._id })
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({ err: errorHandler(err) })
            } else if (!result) {
                return res.status(404).json({ err: "Enrollment not found" })
            }
            return res.status(200).json({ message: "Registration has been removed" })
        })
}

exports.enrollById = async (req, res, next, id) => {
    await Enrollment.findById(id).exec((err, result) => {
        if (err) {
            return res.status(400).json({ err: errorHandler(err) })
        } else if (!result) {
            return res.status(404).json({ err: 'Enrollment not found' })
        }
        else {
            req.enrollment = result
            next()
        }
    })
}

exports.enrollsByClass = async (req, res) => {


}

exports.enrollsQuantityByClass = async (req, res) => {

}

exports.enrollsByTeacher = async (req, res) => {
    console.log(req.teacher._id)
    await Enrollment.aggregate(
        [
            {
                $lookup: {
                    from: 'classes',
                    localField: 'class',
                    foreignField: '_id',
                    as: 'Class'
                }
            },
            { $unwind: '$class' },
            {
                $lookup: {
                    from: 'teachers',
                    localField: 'Class.teacher',
                    foreignField: '_id',
                    as: 'Teacher'
                }
            },
            { $unwind: '$Teacher' },
            {
                $match: {
                    'Teacher._id': {
                        $eq: req.teacher._id
                    }
                }
            },
            {
                $project: {
                    'Teacher': 0,
                    'Class': 0
                }
            }
        ]).exec((err, result) => {
            if (err) {
                return res.status(400).json({ err: errorHandler(err) })
            }
            return res.status(200).json(result)
        })

}