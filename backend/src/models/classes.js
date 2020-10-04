const mongoose = require('mongoose')

const classesSchema = new mongoose.Schema({
    discipline: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Discipline',
        required: true
    },
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

module.exports = mongoose.model('Classes', classesSchema)