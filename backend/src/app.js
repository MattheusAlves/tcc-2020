const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const cors = require('cors')
require('dotenv').config()

//import routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

//app
const app = express()

//database
mongoose.connect(process.env.DATABASE /*dasebase name */,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(() => console.log('DB Connected'))

//middlewares
app.use(morgan('dev')) //middleware for log requests and error to the console
app.use(bodyParser.json()) //middleware for json body
app.use(cookieParser()) //middleware por cookie parse
app.use(expressValidator()) 
app.use(cors())


//routes middleware
app.use('/api', authRoutes)
app.use('/api', userRoutes)


const port = process.env.PORT || 8000 //choice env.PORT or 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

