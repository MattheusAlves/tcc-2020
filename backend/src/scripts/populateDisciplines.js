const jsonDisciplines = require('./JSON/areas_do_conhecimento.json')
const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost/tcc" /* dasebase name */ , {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("DB Connected"));
const Discipline = require("../models/discipline");

const disciplines = new Array()
addToArray(jsonDisciplines['grandes-areas'])
console.log("Disciplines to be saved", disciplines.length)

disciplines.every(async (discipline, index) => {
    const dbDiscipline = await Discipline.create({
        disciplineName: discipline
    })
    await dbDiscipline.save((err, result) => {
        if (err) {
            console.log(`Stop in the index ${index}`)
        }

    })
    return true
})

function addToArray(areas) {
    areas.forEach((area) => {
        if (area.areas && area.areas.length > 1) {
            area.areas.forEach((discipline) => {
                disciplines.push(discipline.nome)
                if (discipline['sub-areas'] && discipline['sub-areas'].length > 1) {
                    discipline['sub-areas'].forEach((subArea) => {
                        disciplines.push(subArea.nome)
                        //
                        if (subArea.especialidades && subArea['especialidades'].length > 1) {
                            subArea.especialidades.forEach((especialidade) => {
                                // console.log(especialidade.nome) //inserir
                                disciplines.push(especialidade.nome)
                            })
                        }
                    })
                } else {
                    // console.log(discipline['sub-areas'].nome) //inserir
                    disciplines.push(discipline['sub-areas'].nome)
                }
            })
        } else {
            area.areas['sub-areas'].forEach((discipline) => {
                disciplines.push(discipline.nome)
                discipline.especialidades.forEach((especialidade) => {
                    disciplines.push(especialidade.nome)
                })
            })
        }

    })
}