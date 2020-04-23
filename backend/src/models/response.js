const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
    response: {
        type: String,
        required:true,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    

},{timestamps:true})

module.exports = mongoose.model('Response', responseSchema)