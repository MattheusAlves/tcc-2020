const mongoose = require('mongoose')
const Rate = require('./rate')

const responseSchema = new mongoose.Schema({
    response: {
        type: String,
        required: true,
    },
    rate: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rate',
    }],
    likes: {
        type: Number,
        min: 0,
        max: 10000,
        default: undefined
    },
    dislikes: {
        type: Number,
        min: 0,
        max: 10000,
        default: undefined
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },


}, { timestamps: true })


responseSchema.statics.getLikes = function (responseId) {
    this.findOne(responseId)
        .populate({
            path: 'rate', select: 'rate',
            match: { 'rate': { $eq: 'like' } }
        }).exec((error, result) => {
            if (result.rate) {
                result.likes = result.rate.length
                result.save((error, savedItem) => {
                    if (error) console.log(error)
                })
            }
        })
}
responseSchema.statics.getDislikes = function (responseId) {
    this.findOne(responseId)
        .select('rate')
        .populate({
            path: 'rate',
            match: { 'rate': { $eq: 'dislike' } }
        }).exec((error, result) => {
            if (result.rate) {
                result.dislikes = result.rate.length
                result.save((error, savedItem) => {
                    if (error) console.log(error)
                })
            }
        })
}

module.exports = mongoose.model('Response', responseSchema)