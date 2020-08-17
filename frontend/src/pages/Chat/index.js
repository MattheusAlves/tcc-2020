import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Title, Divider, List, Searchbar, Avatar, Colors } from 'react-native-paper';
import io from 'socket.io-client'
import { ContentMenuTopSearch } from './Components/Content/ContentMenuTopSearch';
import { ContentMenuMiddle } from './Components/Content/ContentMenuMiddle';
import { ContentMenuContact } from './Components/Content/ContentMenuContacts';

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
      <ContentMenuTopSearch />
      <Divider />
      <ContentMenuMiddle />
      <Divider />
      <ContentMenuContact />
    </View>
  )
}

export default Chat;