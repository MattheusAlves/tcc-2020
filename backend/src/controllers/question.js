
const { errorHandler } = require("../helpers/dbErrorHandler");
const Question = require('../models/question')
const Response = require('../models/response')

exports.create = async (req, res) => {
    await console.log(req.body)
    req.body.user = req.profile._id
    const question = new Question(req.body)
    await question.populate('user').execPopulate()

    await question.save((err, question) => {
        if (err || !question) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        question.user.salt = undefined
        question.user.hashed_password = undefined
        return res.status(200).json({
            message: question
        })

    })

}

exports.questionById = async (req, res, next, id) => {
    await Question.findById(id).exec((err, question) => {
        if (err || !question)
            return res.status(400).json({
                error: errorHandler(err)
            })

        req.question = question

        next()
    })
}

exports.list = async (req, res) => {
    await Question.find().sort('title').exec((err, questions) => {
        if (err || !questions)
            return res.status(400).json({
                error: errorHandler(err)
            })
        return res.status(200).json({
            questions
        })
    })

}

exports.response = async (req, res) => {
    req.body.user = req.profile._id
    response = new Response(req.body)
    await response.save((err, response) => {
        if (err || !response) {
            return res.status(400).json({ error: errorHandler(err) })
        }
        
        Question.findById(req.question._id).exec((err, question) => {
            question.response = [...question.response, response._id]
            question.populate('response').execPopulate()
            question.save((err, question) => {
                if (err || !question) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    })
                }
                return res.status(200).json({
                    response, Questao: question
                })
            })
        })

    })

}