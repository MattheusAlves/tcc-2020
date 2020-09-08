const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema(
    {
        contact: {
            type: String,
            requrired: true
        },
        message: {
            type: String,
            required: true,
            maxlength: 200
        }
    })