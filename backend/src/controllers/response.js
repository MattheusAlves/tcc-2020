const { errorHandler } = require("../helpers/dbErrorHandler");
const Response = require('../models/response')
const Rate = require('../models/rate');

exports.rate = async (req, res) => {
    const { rate } = req.body
    if (rate) {
        Rate.findOne({ response: req.response._id, user: req.profile._id })
            .populate('response')
            .exec(async (error, result) => {
                if (error)
                    return res.status(400).json(errorHandler(error))
                if (!result) {
                    const createRate = new Rate({
                        rate: rate,
                        response: req.response._id,
                        user: req.profile._id
                    })
                    await createRate.save(async (error, rateSaved) => {
                        await Response.findOne(req.response._id)
                            .exec(async (error, response) => {
                                response.rate.push(rateSaved._id)
                                response.save((error, value) => {
                                    if (error)
                                        return res.status(400).json(errorHandler(error))
                                    getRates()
                                })
                            })
                    })
                } else if (result) {
                    if (String(result.rate) === String(rate)) {
                        Rate.findByIdAndDelete({ _id: result._id })
                            .then((error, deleted) => {
                                if (error) {
                                    console.log(error)
                                }
                                Response.update({ _id: req.response._id }, { $pull: { rate: result._id } })
                                    .then((error, updatedResponse) => {
                                        if (error) {
                                            console.log(error)
                                        }
                                    })
                            })
                        getRates()
                        return res.status(200).json({ Sucess: 'Item deleted' })
                    } else {
                        result.rate = rate
                    }
                    result.save((error, savedRate) => {
                        if (error)
                            console.log(error)
                        getRates()
                    })
                }

                return res.status(200).json({})
            })
    }
    function getRates() {
        Response.getLikes(req.response._id)
        Response.getDislikes(req.response._id)
    }
}

exports.rateByResponseQuantity = async (req, res) => {
    Rate.count({ response: req.response._id }, (error, quantity) => {
        if (error || !quantity) {
            if (error) {
                return res.status(400).json(errorHandler(error))
            }
            return res.status(404).json({ errorNotFound: 'Objeto não encontrado' })
        }
        return res.status(200).json({ quantity: quantity })
    })
}


exports.responseById = async (req, res, next, id) => {
    if (id) {
        await Response.findById(id).exec((error, response) => {
            if (error || !response) {
                if (error) {
                    console.log(error)
                    return res.status(400).json(errorHandler(error))
                }
                return res.status(400).json({ errorNotFound: 'O objeto não foi encontrado' })
            }
            req.response = response
            next()
        })
    }
}