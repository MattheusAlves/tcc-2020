const questionBusiness = require("../business/questionBusiness")

exports.createQuestion = questionBusiness.create
exports.questionById = questionBusiness.questionById
exports.list = questionBusiness.list
exports.response = questionBusiness.response

