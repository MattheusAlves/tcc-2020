const mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuidv1')

const date = new Date()

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: 32
    },
    hashed_password: {
      type: String,
      required: true,

    },
    teacher: {
      type: Boolean,
      default: false
    },
    // photo: {
    //   data: Buffer,
    //   contentType: String
    // },

    salt: {
      type: String,
    },
    linkedin: {
      type: String,
      default: undefined
    },
    github: {
      type: String,
      default: undefined
    },
    phone: {
      type: String,
      dafault: undefined
    },
    birthDate: {
      type: Date,
      min: '1900-01-01',
      max: `'${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}'`,
      required: false
    },
    disciplines: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Discipline',
        default: undefined,
        trim: true,
      }
    ]
  },
  { timestamps: true }
)

// virtual field
userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password
    this.salt = uuidv1()
    this.hashed_password = this.encryptPassword(password)
  })
  .get(function () {
    return this.password
  })

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
  },

  encryptPassword: function (password) {
    if (!password) return ''
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex')
    } catch (err) {
      return ''
    }
  }
}
module.exports = mongoose.model('User', userSchema)
