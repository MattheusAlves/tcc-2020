const mongoose = require('mongoose')



const Enrollment = new mongoose.Schema({
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classes',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    goals: {
        type: String,
        min: 20,
        max: 160,
    },
    days: [{
        type: String,
        required: true,
        enum: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"]
    }],
    hour: [{
        type: String,
        required: true
    }],
    hourClassPrice: {
        type: Number,
        required: true,
        set: setPrice,
        get: getPrice
    },

}, { timestamps: true })

// Getter
function getPrice(num) {
    return (num / 100).toFixed(2);
};

// Setter
function setPrice(num) {
    return num * 100;
};

module.exports = mongoose.model('Enrollment', Enrollment)