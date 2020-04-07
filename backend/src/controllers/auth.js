const User = require("../models/user");
const jwt = require("jsonwebtoken"); //to generate signed token
const expressJwt = require("express-jwt"); //for authorization signin
const { errorHandler } = require("../helpers/dbErrorHandler");


exports.signup = async (req, res) => {
  console.log("req.body:", req.body);
  const user = await new User(req.body);
  await user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err)
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({
      user
    });
  });
};

exports.signin = async (req, res) => {
  //find the user based on email
  const { email, password } = req.body;
  await User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User with that e-mail does not exist. Please signup"
      });
    }

    //if user is found make sure the email and password matchs
    //create authenticate method in user models
    if (!user.authenticate(password)) {
      return res.status(401).json({
        err: "E-mail and password doesn't match"
      });
    }
    //generate a signed token with user id and secret

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    //persist the token as 't' in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });
    //return response with user and token to fronted client
    const { _id, name, email, location} = user;
    return res.json({
      token,
      user: { _id, name, email, location}
    });
  });
};

exports.signout = async (req, res) => {
  res.clearCookie("t");
  res.json({ message: "signout sucess" });
};
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth"
});
exports.isAuth = async (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: "Access denied"
    });
  }
  next();
};

/*
 *  update user password using e-mail
 *implement password update by user id?
 *
 *
 *
 */


exports.updatePassword = async (req, res) => {
  const { email, password, newpassword } = req.body;
  await User.findOne({ email }, (err, user) => {
    if (err || !user) {
      res.status(400).json({
        err: "User with that e-mail does not exist. Please signup"
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        err: "E-mail and password doesn't match"
      });
    }
    user.password = newpassword;
    user.save((err, user) => {
      if (err || !user) {
        res.status(401).json({
          err: "Cannot update user password"
        });
      }
      res.status(200).json({
        user
      });
    });
  });
};