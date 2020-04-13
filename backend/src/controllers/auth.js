const authBusiness = require("../business/authBusiness");

exports.signup = authBusiness.signup
exports.signin = authBusiness.signin
exports.signout = authBusiness.signout
exports.requireSignin = authBusiness.requireSignin
exports.isAuth = authBusiness.isAuth
exports.updatePassword = authBusiness.updatePassword
