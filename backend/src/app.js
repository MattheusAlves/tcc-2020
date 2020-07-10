const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require("socket.io").listen(server)
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const expressValidator = require("express-validator");
const cors = require("cors");

require("dotenv").config();

// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const teacherRoutes = require("./routes/teacher");
const questionRoutes = require("./routes/question");
const disciplineRoutes = require("./routes/discipline");

// database
mongoose
  .connect(process.env.DATABASE /* dasebase name */, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));

// middlewares
app.use(morgan("dev")); // middleware for log requests and error to the console
app.use(bodyParser.json()); // middleware for json body
app.use(cookieParser()); // middleware por cookie parse
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", teacherRoutes);
app.use("/api", questionRoutes);
app.use("/api", disciplineRoutes);


//socket.io methods || Chat
//when a clint connects
io.on("connection", socket => {
  console.log("a user connected")
  //when clint send a message to the socket server
  socket.on("chat message", msg => {
    console.log(msg)
    //send the  message to all clients
    io.emit("chat message", msg)
  })
})

//server init
const port = process.env.PORT || 8000; // choice env.PORT or 8000
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

