const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    room: {
        type: String,
        required: true,

    }
})