const { list } = require("./question");
const ModelChat = require("../models/Chat");
const { Model } = require("mongoose");
const mongoose = require("mongoose");
class Chat {
  constructor(io) {
    this.io = io;
    this.init();
    this.socketMap = {};
    this.userSocketIdMap = new Map();
  }

  async init() {
    this.io.on("connection", (socket) => {
      console.log(`Connected: ${socket.id}`);
      //send to all clients the online users
      this.io.sockets.emit(
        "onlineUsers",
        JSON.stringify(this.strMapToObj(this.userSocketIdMap.entries()))
      );

      this.addOnlineUser(
        socket.handshake.query["username"],
        socket.handshake.query["userId"],
        socket.id,
        socket.handshake.query["teacher"]
      );
      console.log("user socket id map", this.userSocketIdMap);

      socket.on("disconnect", (data) => {
        const { username, userId } = data;
        this.removeOnlineUser(userId, socket.id);
        this.io.sockets.emit(
          "onlineUsers",
          JSON.stringify(this.strMapToObj(this.userSocketIdMap.entries()))
        );

        console.log(
          `Disconnected: ${socket.id} username:${username} userId ${userId}`
        );
      });

      socket.on("reqOnlineUsers", () => {
        console.log(this.strMapToObj(this.userSocketIdMap.entries()));
        this.io
          .to(socket.id)
          .emit(
            "onlineUsers",
            JSON.stringify(this.strMapToObj(this.userSocketIdMap.entries()))
          );
      });

      socket.on("join", (data) => {
        const { username, userId, teacher = false, room } = data;
        console.log(
          `Socket ${socket.id} joining ${room} user ${username} e userId ${userId} teacher ${teacher}`
        );
        if (room) {
          socket.join(room);
        }
      });

      //when clint send a message to the socket server
      socket.on("chat", async (data) => {
        const { message, room, userId } = data;
        console.log(
          `msg: ${message}, room: ${room},
          username: ${this.userSocketIdMap.get(socket.id).username}`
        );

        //  store message
        await ModelChat.create({
          content: message,
          to: userId,
          from: this.userSocketIdMap.get(socket.id).userId,
        });

        //send the  message to all clients in the room
        this.io.to(data.room).emit("chat", {
          message: data.message,
          username: this.userSocketIdMap.get(socket.id).username,
          to:userId,
          socketId: socket.id,
          userId: this.userSocketIdMap.get(socket.id).userId,
        });
      });
    });
  }

  strMapToObj(strMap) {
    let obj = new Array();
    for (let [k, v] of strMap) {
      obj.push({
        username: v.username,
        socketId: k,
        userId: v.userId,
        teacher: v.teacher,
      });
    }
    return obj;
  }

  async findUser(userId) {
    for (let [k, v] of this.userSocketIdMap) {
      if (v.userId === userId) {
        return k;
      }
    }
    return false;
  }

  async addOnlineUser(userName, userId, socketId, teacher) {
    let check = await this.findUser(userId);
    if (check) {
      this.removeOnlineUser(userId, check);
    }
    if (!this.userSocketIdMap.has(socketId)) {
      this.userSocketIdMap.set(socketId, {
        username: userName,
        userId,
        teacher,
      });
    } else {
      //user had already joined from one client and now joining using another
      //client
      this.removeOnlineUser(userId, socketId);
      this.userSocketIdMap.set(socketId, {
        username: userName,
        userId,
        teacher,
      });
    }
  }

  removeOnlineUser(userId, socketId) {
    if (this.userSocketIdMap.has(socketId)) {
      this.userSocketIdMap.delete(socketId);
    } else {
      let check = this.findUser(userId);
      if (check) {
        this.userSocketIdMap.delete(check);
      }
    }
  }
}

async function loadMessages(req, res) {
  const id = await mongoose.Types.ObjectId(req.query.recipient);

  ModelChat.find({
    $or: [
      { $and: [{ to: req.profile._id }, { from: id }] },
      { $and: [{ to: id }, { from: req.profile._id }] },
    ],
  })
    .sort({ createdAt: 1 })
    .exec((err, messages) => {
      if (err) {
        console.log(err);
        return res.status(400).json(err);
      } else {
        return res.status(200).json(messages);
      }
    });
}
async function loadLastMessage(req, res) {
  ModelChat.find({
    $or: [
      { $and: [{ to: req.profile._id }] },
      { $and: [{ from: req.profile._id }] },
    ],
  })
    .sort({ createdAt: -1 })
    .populate("to", 'name teacher')
    .populate("from",'name teacher')
    .limit(1)
    .exec((err, message) => {
      if (err) {
        console.log(err);
        return res.status(400).json(err);
      } else {
        return res.status(200).json(message);
      }
    });
}

module.exports = {
  chat: Chat,
  loadMessages: loadMessages,
  loadLastMessage: loadLastMessage,
};
