const User = require('../models/user')

exports.userById = async (req, res, next, id) => {
  await User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }
        req.profile = user
        next()

    })
}

exports.updateDiscipline = async (req, res) => {
    await User.findById(req.profile._id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }
        
        
        user.disciplines = req.body.disciplines
        user.save((err, user) => {
            if (err || !user) {
                return res.status(400).json({ err: "Cannot update user" })
            }
            return res.status(200).json({ user })
        })
    })
}