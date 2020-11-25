const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    default: "Point",
    required: true
  },
  coordinates: {
    //<longitude>,<latitude>
    type: [Number],
    required: true
  }
})

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
      maxlength: 200
    },
    academicFormation: {
      type: String,
      maxlength: 130,
      minlength:30
    },
    location: {
      type: pointSchema,
      index: '2dsphere',
      required: true
    },
    // classes: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Classes',
    //   required: true
    // }],
    pupils: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: undefined
    }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Teacher', teacherSchema)
