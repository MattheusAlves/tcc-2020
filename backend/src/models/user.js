const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuidv1");

const date = new Date();
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: 32,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    //    location:{
    //        type:PointSchema,
    //        index:'2dshepre'
    //        //required:true
    //    },
    /**
     * implementar geolocalização
     *
     */

    salt: String,
    birthDate: {
      type: Date,
      min: "1900-01-01",
      max:`'${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}'`, 
      required: true,
    },
    disciplines: {
      type:[mongoose.Schema.Types.ObjectId],
      ref: "Discipline",
      default: undefined,
    },
  },
  { timestamps: true }
);

//virtual field
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this.password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};
module.exports = mongoose.model("User", userSchema);
