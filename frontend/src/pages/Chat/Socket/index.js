import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

let socket
const socketURL = 'http://192.168.1.108:8000'

export const initializeSocket = (data) => {
    socket = io(socketURL)
    console.log("Connecting socket...")
    console.log(data)
    socket.emit('join', data)
}

export const disconnectSocket = (data) => {
    console.log('Disconnecting socket...')
    if (socket) socket.disconnect(data)
}

export const subscribeToChat = (cb) => {
    if (!socket) return (true)

    socket.on('chat', data => {
        console.log('Websocket event received!')
        return cb(null, data)
    })
}

export const sendMessage = (room, message) => {
    if (socket) socket.emit('chat', { message, room })
}
export const getOnlineUsers = (room = undefined, cb) => {
    socket.emit('onlineUsers', room)
    socket.on('onlineUsers', data => {
        console.log('Online users event received')
        console.log(data)
        return cb(null, data)
    })
}
    
