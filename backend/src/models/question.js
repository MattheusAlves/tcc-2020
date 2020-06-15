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
        type: String,
        required: true,
        trim: true
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

}, { timestamps: true })

module.exports = mongoose.model('Question', questionSchema)