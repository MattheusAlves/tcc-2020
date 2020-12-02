import io from 'socket.io-client';

let socket;
const socketURL = 'http://192.168.1.114:8000';

export const initializeSocket = (data) => {
  socket = io(socketURL, {
    query: `username=${data.username}&userId=${data.userId}&teacher=${data.teacher}`,
  });
  console.log('Connecting socket...');
  console.log(data);
};

export const joinRoom = (data) => {
  socket.emit('join', data);
};

export const disconnectSocket = (data) => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect(data);
};

export const subscribeToChat = (cb) => {
  if (!socket) return true;
  

  socket.on('chat', (data) => {
    console.log('Websocket event received!');
    return cb(null, data);
  });
};

export const sendMessage = (room, message, userId) => {
  if (socket) socket.emit('chat', {message, room, userId});
};

export const requestOnlineUsers = () => {
  socket.emit('reqOnlineUsers');
};
export const getOnlineUsers = (cb) => {
  socket.on('onlineUsers', (data) => {
    console.log('Online users event received');
    return cb(null, data);
  });
};
