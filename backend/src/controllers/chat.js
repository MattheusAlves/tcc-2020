const { list } = require("./question");
const ModelChat = require("../models/Chat");
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
        console.log(
          `Disconnected: ${socket.id} username:${username} userId ${userId}`
        );
      });

      socket.on("onlineUsers", (room) => {
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
      this.removeOnlineUser(check);
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
      let userSocketIdSet = this.userSocketIdMap.get(socketId);
      console.log("user socket foremove", userSocketIdSet);
      this.userSocketIdMap.delete(socketId);
    } else {
      let check = this.findUser(userId);
      if (check) {
        // this.userSocketIdMap.delete(check);
      }
    }
    console.log("Atual: ", this.userSocketIdMap);
  }
}
module.exports = Chat;
