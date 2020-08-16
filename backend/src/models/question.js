const mongoose = require('mongoose')

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
        ref: 'Discipline'
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
        default: undefined
    },
    dislikes: {
        type: Number,
        min: 0,
        max: 10000,
        default: undefined
    },

}, { timestamps: true })

// questionSchema.post('save', function (doc, next) {
//     this.getLikes(doc._id)
//     next()
// // })
questionSchema.pre('save', function (next) {
    const Item = this.constructor;
    Item.findById(this._id)
        .populate({
            path: 'rate', select: 'rate',
            match: { 'rate': { $eq: 'like' } }
        }).exec((error, result) => {
            if (error || !result) {
                console.log(error)
            } else {
                console.log('result:', result)
                result.likes = result.rate.length + 5
            }
        })
    next()
})
questionSchema.methods = {
    getLikes: function (questionId) {
        this.findOne(questionId)
            .populate({
                path: 'rate', select: 'rate',
                match: { 'rate': { $eq: 'like' } }
            }).exec((error, result) => {
                if (result.rate) {
                    result.likes = result.rate.length + 5
                    result.save((error, savedItem) => {
                        if (error) console.log(error)
                    })
                }
            })
    },
    getDislikes: function (questionId) {
        this.findOne(questionId)
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
}
questionSchema.statics.getLikes = function (questionId) {
    this.findOne(questionId)
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
questionSchema.statics.getDislikes = function (questionId) {
    this.findOne(questionId)
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

module.exports = mongoose.model('Question', questionSchema)