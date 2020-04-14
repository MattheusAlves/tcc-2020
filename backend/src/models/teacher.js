const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    cpf: {
      type: Number,
      requrired: true,
      unique: 11,
    },
    rank: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    /**
     * Localização
     */
    studyFields: {
      //type: [mongoose.Schema.Types.ObjectId],
      type: [String],
      ref: "Discipline",
      default: undefined,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    student:{
      type:Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", teacherSchema);
