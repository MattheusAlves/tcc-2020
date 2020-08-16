const mongoose = require('mongoose')

const rateSchema = new mongoose.Schema({
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

module.exports = mongoose.model("RateQuestion", rateQuestionSchema) 