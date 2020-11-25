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

module.exports = mongoose.model("RateQuestion", rateQuestionSchema) 