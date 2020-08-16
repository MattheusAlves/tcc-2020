const mongoose = require('mongoose')
const Question = require('./question')

const rateQuestionSchema = new mongoose.Schema({
    rate: {
        type: String,
        enum: ['like', 'dislike'],
        required: true
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

//criar um model rate

rateQuestionSchema.pre('save', function (next) {
    const Item = this.constructor;
    Question.findById(Item._id)
        .populate({
            path: 'rate', select: 'rate',
            match: { 'rate': { $eq: 'like' } }
        }).exec((error, result) => {
            if (error || !result) {
                console.log(error)
            } else {
                console.log('result:', result)
                result.likes = result.rate.length + 5
                save((error, ratedQuestion) => {
                    if (error) {
                        console.log(error)

                    }
                    else
                        console.log(ratedQuestion)
                })
            }
        })
    next()
})

module.exports = mongoose.model("RateQuestion", rateQuestionSchema) 