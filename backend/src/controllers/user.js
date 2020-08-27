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
exports.getProfile = async (req, res) => {
  await User.findById(id)
    .populate('Discipline')
    .exec((error, user) => {
      if (error || !user) {
        return res.status(400).json(errorHandler(error))
      }
      return res.status(200).json(user)
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
  await User.findById(req.profile._id).exec(async (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found'
      })
    }
    const selectDisciplines = []
    console.log(user.disciplines)
    for (let i = 0; i < disciplines.length; i++) {
      if (user.disciplines.includes(disciplines[i]) === false)
        selectDisciplines.push(disciplines[i])
    }
    console.log("select disciplines", selectDisciplines)
    if (!selectDisciplines[0]) {
      return res.status(402).json({ Message: "User already has all these disciplines" })
    }
    user.disciplines = [...user.disciplines, ...selectDisciplines]
    await user.populate('disciplines').execPopulate()
    await user.save((err, user) => {
      if (err || !user) {
        return res.status(400).json(errorHandler(err))
      }
      user.hashed_password = ''
      user.salt = ''
      return res.status(200).json({ user, length: selectDisciplines.length })
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

exports.disciplinesByUser = async (req, res) => {
  User.findById(req.profile._id)
    .select('disciplines')
    .populate("disciplines")
    .exec((error, user) => {
      if (error) {
        console.log(error)
        return res.status(400).json(errorHandler(error))
      }
      console.log(user)
      return res.status(200).json(user)
    })
  //   await User.findById(req.profile._id).exec(async (error, user) => {
  //   if (error) {
  //     return res.status(400).json({ error: errorHandler(error) })
  //   }
  //   console.log(req.profile._id)
  //   await user.populate('disciplines').execPopulate().then((user) => {
  //     console.log(user)
  //   })
  //   user.hashed_password = ''
  //   user.salt = ''
  //   // console.log(user.disciplines)
  //   return res.status(200).json(user.disciplines)
  // })
}