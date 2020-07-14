const mongoose = require('mongoose')

/**
 *
 */
const disciplineSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 4,
    max: 32,
    required: true,
    uppercase: true,
    trim: true,
    unique: true
  },
  tags: {
    type: String,
    required: true,
    uppercase: true,
    trim: true
  },
  related: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discipline',
    default: undefined

  }]

}, { timestamps: true })

module.exports = mongoose.model('Discipline', disciplineSchema)
