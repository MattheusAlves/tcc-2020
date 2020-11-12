import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import io from 'socket.io-client'

import {
  initializeSocket,
  disconnectSocket,
  subscribeToChat,
  sendMessage,
  getOnlineUsers
} from './Socket'
import styles from './style'

const Chat = (props) => {
  const rooms = ['A', 'B', 'C']
  const [chatMessage, setChatMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([{ username: undefined, message: undefined }])
  const [data, setData] = useState({ username: null, room: undefined })

  useEffect(() => {
    //room = mensageiroId/destinatarioId
    if (data.username) {
      if (data) initializeSocket(data)

      getOnlineUsers(null, (err, data) => {
        console.log('Usuários online')
        console.log(data)
        return
      })
    }
    subscribeToChat((err, data) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(data)
      setChatMessages(oldMessages => [...oldMessages, data])
    })

    return () => disconnectSocket(data)

  }, [data])




  async function submitMessage() {
    sendMessage(null, chatMessage)
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
      <TextInput value={data.username} onChangeText={username => setData({ username: username })} style={{ borderWidth: 2 }}></TextInput>
      {chatMessages.map(data =>
        data.message != undefined && data.username != undefined &&
        <Text key={data.message}>{`${data.username}: ${data.message}`}</Text>
      )}
    </View>
  )
}

export default Chat;