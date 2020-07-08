const { errorHandler } = require('../helpers/dbErrorHandler')
const _ = require('lodash')

const User = require('../models/user')
const discipline = require('../models/discipline')

exports.userById = async (req, res, next, id) => {
  await User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: err
      })
    }

    req.profile = user
    next()
  })
}


/**
 * Atualiza as disciplinas do usuário
 */
exports.update = async (req, res) => {
  // Transforma as disciplinas em um array, remove os espaços e capitaliza a primeira letra

  const { disciplines } = req.body

  if (disciplines.length < 1) {
    return res.status(400).json({ err: 'incorrectly formatted disciplines' })
  }
  //  else {
  //    for (let i = 0; i < disciplines.length; i++) {
  //      if (disciplines[i].length < 3 || !_.isString(disciplines[i])) {
  //        return res.status(400).json({
  //          err: "incorrectly formatted or undefined disciplines",
  //        });
  //      }
  //    }
  //  }
  await User.findById(req.profile._id).exec(async (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found'
      })
    }
    await user.populate('disciplines').execPopulate()
    console.log("disciplinas user", user.disciplines)
    const selectDisciplines = []
    for (let i = 0; i < user.disciplines.length; i++) {
      if (disciplines.indexOf(user.disciplines[i]._id) === -1)
        selectDisciplines.push(disciplines[disciplines.indexOf(user.disciplines[i]._id)])
    }
    console.log("select disciplines", selectDisciplines)
    if (selectDisciplines.length < 1) {
      return res.status(400).json({ Message: "User already has all these disciplines" })
    }
    // Checa se o usuário já possui o campo de estudo
    // for (let j = 0; j < disciplines.length; j++) {
    //   if (disciplines[j].length < 3 || !_.isString(disciplines[j])) {
    //     return res.status(400).json({
    //       err: 'incorrectly formatted or undefined disciplines'
    //     })
    //   }
    //   for (let i = 0; i < user.disciplines.length; i++) {
    //     if (disciplines[j] == user.disciplines[i]) {
    //       // Remove the first element if j = 0
    //       j === 0 ? disciplines.shift() : disciplines.splice(j - 1, 1)
    //       //trocar splice por filter
    //     }
    //   }
    // }

    if (disciplines.length < 1) {
      return res
        .status(400)
        .json({ err: 'User already has all these disciplines' })
    }

    // if (
    //   user.disciplines &&
    //   user.disciplines.indexOf(req.discipline._id) != -1
    // ) {
    //   return res.status(200).json({
    //     message: "User already has this discipline",
    //   });
    // } else if (user.disciplines) {
    user.disciplines = [...user.disciplines, ...disciplines]
    await user.populate('disciplines').execPopulate()
    // } else {
    //   user.disciplines = [req.discipline._id];
    // }

    await user.save((err, user) => {
      if (err || !user) {
        return res.status(400).json(errorHandler(err))
      }

      return res.status(200).json({ user })
    })
  })
}

exports.updateLocation = async (req, res) => {
  const coordinates = [...req.body.coordinates]
  User.findById(req.profile._id, (error, user) => {
    if (error) {
      return res.status(400).json(errorHandler(error))
    }
    user.location.coordinates = coordinates
    user.save()
    return res.status(200).json(user)
  })
}
