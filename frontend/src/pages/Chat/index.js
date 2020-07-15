import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import io from 'socket.io-client'

import {
  initializeSocket,
  disconnectSocket,
  subscribeToChat,
  sendMessage
} from './Socket'
import styles from './style'

const Chat = () => {
  const rooms = ['A', 'B', 'C']
  const [chatMessage, setChatMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([{ username: undefined, message: undefined }])
  const [data, setData] = useState({ username: 'username', room: rooms[0] })


  useEffect(() => {
    if (data) initializeSocket(data)

    subscribeToChat((err, data) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(data)
      setChatMessages(oldMessages => [...oldMessages, { username: data.username, message: data.message }])
    })

    console.log("rodou effect")
    // socket.on("chat message", msg => {
    //   setChatMessages(oldMessages => [...oldMessages, msg])
    // })

    return () => {
      disconnectSocket()

    }
  }, [data])





  async function submitMessage() {
    console.log(chatMessages)
    sendMessage(rooms[0], chatMessage)
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

      {chatMessages.map(msg => (
        msg.username && msg.message && (
          <Text key={msg.message}>
            {`${msg.username} : ${msg.message}`}
          </Text>)
      ))}

    </View>
  )
}

export default Chat;