
const { errorHandler } = require("../helpers/dbErrorHandler");
const Question = require('../models/question')
const Response = require('../models/response')

exports.create = async (req, res) => {
    await console.log(req.body)
    req.body.user = req.profile._id
    const question = new Question(req.body)
    await question.populate('category').execPopulate()

    await question.save((err, question) => {
        if (err || !question) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        // question.user.salt = undefined
        // question.user.hashed_password = undefined
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
    console.log('teste')
    await Question.find().sort({ 'createdAt': 'desc' }).exec((err, questions) => {
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
    console.log(req.profile)
    req.body.user = req.profile._id
    console.log(req.question)
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
                    Questao: question, Answer: response
                })
            })
        })

    })

}
exports.asnwersQuantity = async (req, res) => {
    console.log(req.question._id)
    await Question.findById(req.question._id).exec((err, question) => {
        if (err || !question) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        return res.status(200).json({
            asnwersQuantity: question.response.length
        })
    })

}
exports.questionByCategory = async (req, res) => {
    const categories = req.disciplines || req.body.disciplines
    categories.map(function (category) {
        console.log(category)
        Question.find({ category: category.toString() })
            .limit(req.body.limit)
            .populate('category')
            .exec((err, result) => {
                return new Promise((resolve, reject) => {
                    const teste = result.map(function (resultado) {
                        return { categoryName: resultado.category.disciplineName, resultado }
                    })
                    resolve(teste)
                }).then((result) => res.status(200).json('teste'))
            })
    })
}