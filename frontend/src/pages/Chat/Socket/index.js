import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

let socket
const socketURL = "http://localhost:8000"

export const initializeSocket = (data) => {
    socket = io(socketURL)
    console.log("Connecting socket...")
    if (socket && data.room && data.username) socket.emit('join', data)
}

export const disconnectSocket = () => {
    console.log('Disconnecting socket...')
    if (socket) socket.disconnect()
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