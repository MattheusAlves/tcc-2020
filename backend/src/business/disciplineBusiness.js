const Discipline = require("../models/discipline");
const { errorHandler } = require("../helpers/dbErrorHandler");


exports.disciplineById =  (req,res,next,id) => {
    Discipline.findById(id).exec((err, discipline) => {
        if(err || !discipline){
            return res.status(400).json({
                error:"Discipline not found"
            })
        }
        req.discipline = discipline
        next()
    })


}
/**
 * method for list all disciplines
 */