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

const Chat = (props) => {
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
      setChatMessages(oldMessages => [...oldMessages, data])
    })

    return () => disconnectSocket()

  }, [data])

  async function submitMessage() {
    console.log("chat messsages:", chatMessages)
    sendMessage(data.room, chatMessage)
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
      {chatMessages.map(data =>
        data.message != undefined && data.username != undefined &&
        <Text key={data.message}>{`${data.username}: ${data.message}`}</Text>
      )}
    </View>
  )
}

export default Chat;