const mongoose = require('mongoose')
const Rate = require('./rateQuestion')

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 84,
        min: 32,
        trim: true
    },
    description: {
        type: String,
        required: true,
        max: 264,
        min: 64

    },
    /**
     * Selecionar discipline do BD
     */
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Discipline',
        required: true
    },
    //se a caregoria não existir na base disciplinas
    categoryOther: {
        type: String,
        trim: true,
        uppercase: true
    },
    //deve ser uma referencia para categorias
    response: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Response',
        default: undefined
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    rate: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RateQuestion',
    }],
    likes: {
        type: Number,
        min: 0,
        max: 10000,
        default: 0
    },
    dislikes: {
        type: Number,
        min: 0,
        max: 10000,
        default: 0
    },

}, { timestamps: true })
questionSchema.statics.getLikes = function (questionId) {
    this.findById(questionId)
        .populate({
            path: 'rate', select: 'rate',
            match: { 'rate': { $eq: 'like' } }
        }).exec((error, result) => {
            if (result.rate) {
                result.likes = result.rate.length
                result.save()
            }
        })
}
questionSchema.statics.getDislikes = function (questionId) {
    this.findOne(questionId)
        .populate({
            path: 'rate', select: 'rate',
            match: { 'rate': { $eq: 'dislike' } }
        }).exec((error, result) => {
            if (result.rate) {
                result.dislikes = result.rate.length
                result.save()
            }
        })
}


module.exports = mongoose.model('Question', questionSchema)