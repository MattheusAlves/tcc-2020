const mongoose = require('mongoose')

/**
 * 
 */
const disciplineSchema = new mongoose.Schema({
    disciplineName:{
        type:String,
        min:4,
        max:32,
        required:true,
        uppercase:true,
        trim:true,
    },
    relatedDisciplines:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Discipline',
        default:undefined

    }



},{timestamps:true})

module.exports = mongoose.model("Discipline", disciplineSchema)