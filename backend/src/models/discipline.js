const mongoose = require('mongoose')

/**
 *
 */
const disciplineSchema = new mongoose.Schema({
  //Alterar para apenas name
  disciplineName: {
    type: String,
    min: 4,
    max: 32,
    required: true,
    uppercase: true,
    trim: true,
    unique: true
  },
  // tags: {
  //   type: String,
  //   required: true,
  //   uppercase: true,
  //   trim: true
  // },
  related: [{
    type: String,
    default: undefined

  }]

}, {
  toObject: { getters: true },
  toJSON: { getters: true },
  timestamps: true
})

module.exports = mongoose.model('Discipline', disciplineSchema)
