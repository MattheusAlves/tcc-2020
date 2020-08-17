
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
        if (err || !question) {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                })
            } else
                return res.status(400).json({ errorNotFound: 'O objeto não foi encontrado' })
        }
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
    req.body.user = req.profile._id
    response = new Response(req.body)
    await response.save((err, response) => {
        if (err || !response) {
            return res.status(400).json({ error: errorHandler(err) })
        }

        Question.findById(req.question._id).exec((err, question) => {
            if (err || !question) {
                console.log(err)
                return res.status(404).json({ error: "Question not found" })
            }
            console.log("response id", response._id)
            question.response.push(response._id)
            // question.populate('response').execPopulate()
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

exports.responsesByQuestion = async (req, res) => {
    await Question.findById(req.question._id)
        .lean()
        .populate({
            path: 'response',
            options: {
                limit: req.query.limit,
                sorte: { cratedAt: -1 }
            },
            populate: {
                path: 'user', select: 'name',

            },
        }).populate({
            path: 'response',
            options: {
                limit: req.query.limit,
                sorte: { cratedAt: -1 }
            },
            populate: {
                path: 'rate',

            },


        })

        // .sort({ createdAt: -1 })
        .exec((err, question) => {
            if (err || !question) {
                console.log(err)
                return res.status(400).json({ error: errorHandler(err) })
            }
            const allResponses = question.response.map((item) => {
                for (let n in item.rate) {
                    if (String(item.rate[n].user) === String(req.profile._id)) {
                        console.log("entrou if")
                        item.userRatedIndicator = String(item.rate[n].rate)
                        console.log(item)
                    }
                    return item
                }
            })

            console.log("user", allResponses)
            return res.status(200).json(question.response)
        })
}

exports.responsesQuantity = async (req, res) => {
    console.log(req.question._id)
    await Question.findById(req.question._id).exec((err, question) => {
        if (err || !question) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        console.log(question.response.length)
        return res.status(200).json({
            
            answersQuantity: question.response.length
        })
    })

}

exports.questionByCategory = async (req, res) => {

    const categories = req.query.disciplines

    const data = await categories.map(async function (category) {
        category = JSON.parse(category)
        return await Question.find({ category: category.id })
            .limit(parseInt(req.query.limit))
            .populate('category')
            .populate({
                path: 'user', select: '_id',
                path: 'user', select: 'name'
            })
            .exec()
    })

    Promise.all(data).then((value) => {
        const filtered = value.filter(function (value) {
            return value != null && value != '' && value != undefined
        })
        return filtered

    }).then((filteredValue) => {
        let formatedData = []
        for (let i = 0; i < filteredValue.length; i++) {
            formatedData.push(filteredValue[i].map((data) => {
                data.user.hashed_password = undefined
                data.user.salt = undefined
                return { categoryName: data.category.disciplineName, body: data }
            }))
        }
        return res.status(200).json(formatedData)
    })
}
