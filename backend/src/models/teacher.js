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
      max: 10,
      default: 0
    },
    bio:{
      type:String,
      required:true,
      maxlength:230
    },
    studyFields: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Discipline',
      default:undefined
    }],
    classes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Classes',
      required: true
    }]

  },
  { timestamps: true }
)

module.exports = mongoose.model('Teacher', teacherSchema)
