const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema(
  {
    cpf: {
      type: Number,
      requerid: true,
      unique: 11
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      unique: true
    },
    rank: {
      type: Number,
      min: 0,
      max: 5,
      default: undefined
    },
    bio: {
      type: String,
      required: true,
      maxlength: 350
    },
    academicFormation: {
      type: String,
      maxlength: 150
    },
    classes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Classes',
      required: true
    }],
    pupils: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: undefined
    }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Teacher', teacherSchema)
