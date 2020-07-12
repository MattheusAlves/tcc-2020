import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import io from 'socket.io-client'

import styles from './style'

const Chat = () => {
  const [chatMessage, setChatMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([])
  const [socket] = useState(io("http://192.168.1.108:8000"))


  useEffect(() => {
    console.log("rodou effect")
    socket.on("chat message", msg => {
      setChatMessages(oldMessages => [...oldMessages, msg])
    })

    return () => {
      socket.disconnect()
    }
  }, [])





  async function submitMessage() {
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
        onChangeText={message => {
          setChatMessage(message)

        }} />

      {chatMessages.map(message => <Text key={message}>{message}</Text>)}
    </View>
  )
}

export default Chat;