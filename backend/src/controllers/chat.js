

// async function chat(io) {
//     const socketMap = {}
//     io.on("connection", socket => {
//         console.log(`Connected: ${socket.id}`)

const { list } = require("./question")

//         socket.on('disconnect', () => console.log(`Disconnected: ${socket.id}`))

//         socket.on('join', data => {
//             const { username, room } = data
//             console.log(`Socket ${socket.id} joining ${room} user ${username}`)
//             if(room)
//             socket.join(room)
//             socketMap[socket.id] = username
//             io.to(socket.id).emit('chat', `seu ID é  ${socket.id}`)
//         })

//         //when clint send a message to the socket server
//         socket.on("chat", data => {
//             const { message, room } = data
//             console.log(`msg: ${message}, room: ${room}`)
//             //send the  message to all clients in the room
//             io.to(data.room).emit('chat', {
//                 message: data.message,
//                 username: socketMap[socket.id]
//             })
//         })
//     })
// }

// module.exports = {
//     chat: function (io) {

//     },
//     onlineUsers: function (io) {

//     }

// }





class Chat {

    constructor(io) {
        this.io = io
        this.init()
        this.socketMap = {}
        this.userSocketIdMap = new Map()
    }

    async init() {
        this.io.on("connection", socket => {
            console.log(`Connected: ${socket.id}`)

            socket.on('disconnect', (data) => {
                const { username } = data
                this.removeOnlineUser(username, socket.id)
                console.log(`Disconnected: ${socket.id} username:${username}`)
            })

            socket.on('onlineUsers', (room) => {
                console.log("Event online users")
                console.log(this.userSocketIdMap)
                console.log(JSON.stringify(this.strMapToObj(this.userSocketIdMap.entries())))
                this.io.to(socket.id).emit('onlineUsers', Array.from(this.userSocketIdMap.entries()))
                this.io.to(socket.id).emit('onlineUsers', 'ooi')
            })

            socket.on('join', data => {
                const { username, room } = data
                console.log(`Socket ${socket.id} joining ${room} user ${username}`)
                if (room) {
                    socket.join(room)
                }
                this.addOnlineUser(username, socket.id)
                this.io.to(socket.id).emit('chat', `seu ID é  ${socket.id}`)
            })

            //when clint send a message to the socket server
            socket.on("chat", data => {
                const { message, room } = data
                console.log(`msg: ${message}, room: ${room},username: ${this.userSocketIdMap.get(socket.id)}`)
                //send the  message to all clients in the room
                this.io.to(data.room).emit('chat', {
                    message: data.message,
                    username: this.userSocketIdMap.get(socket.id)
                })
            })
        })
    }

    strMapToObj(strMap) {
        let obj = Object.create(null);
        for (let [k, v] of strMap) {
            // We don’t escape the key '__proto__'
            // which can cause problems on older engines
            let setValue = v.values()
            obj[k] = [...setValue].toLocaleString()


        }
        return obj;
    }

    async addOnlineUser(userName, socketId) {
        if (!this.userSocketIdMap.has(userName)) {
            this.userSocketIdMap.set(userName, new Set([socketId]))
        } else {
            //user had already joined from one client and now joining using another
            //client
            this.removeOnlineUser(userName, socketId)
            this.userSocketIdMap.set(userName, new Set([socketId]))
        }
    }

    removeOnlineUser(userName, socketId) {
        if (this.userSocketIdMap.has(userName)) {
            let userSocketIdSet = this.userSocketIdMap.get(userName)
            userSocketIdSet.delete(socketId)

            if (userSocketIdSet.size === 0) {
                this.userSocketIdMap.delete(userName)
            }
        }
    }
}
module.exports = Chat