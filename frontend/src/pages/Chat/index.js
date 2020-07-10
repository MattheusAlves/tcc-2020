import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import io from 'socket.io-client'

import styles from './style'

const Chat = () => {
  const [chatMessage, setChatMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([])
  const [socket, setSocket] = useState()


  useEffect(() => {
    if (!socket) {
      setSocket(getSocket())
    }
  }, [socket])

  const getSocket = () => io("http://localhost:8000")
  socket.on("chat message", msg => {
    console.log(msg)
    setChatMessages([...chatMessages, msg])
    console.log(chatMessages)
  })


  async function submitMessage() {
    console.log(chatMessages)
    await socket.emit("chat message", chatMessage)
    setChatMessage('')

  }

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        style={{ height: 40, borderWidth: 2, }}
        value={chatMessage}
        onSubmitEditing={() => submitMessage()}
        onChangeText={chatMessage => {
          setChatMessage(chatMessage)

        }} />
      {chatMessages.map(message => <Text key={message}>{message}</Text>)}
    </View>
  )
}

export default Chat;