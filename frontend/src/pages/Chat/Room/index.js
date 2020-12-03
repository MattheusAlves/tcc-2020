import React, {useEffect, useCallback, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './style';

import {sendMessage, subscribeToChat, joinRoom} from '../Socket/';
import {useAuth} from '../../../contexts/auth' 

const Room = ({navigation, route}) => {
  const [data, setData] = useState({
    username: route.params.username,
    room: route.params.socketId,
    userId: route.params.userId,
  });
  const [refreshing, setRefreshing] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const {user} = useAuth()

  const onRefresh = useCallback(() => {});

  useEffect(() => {
    function loadRoom() {
      navigation.setOptions({
        title:`Sala com ${data.username}`
      })
      joinRoom({room: data.room, username: data.username});
      subscribeToChat((err, message) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('chegou mensagem', message);
        setChatMessages((oldMessages) => [...oldMessages, message]);
      });
    }
    loadRoom();
  }, []);

  async function submitMessage() {
    sendMessage(data.room, inputMessage, data.userId);
    setInputMessage('');
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {chatMessages.length > 0 &&
          chatMessages.map((message,index) =>
            message.userId === user._id ? (
              <View style={[styles.messageWrapper, styles.myMessageWrapper]} key={index}>
                <Text style={styles.userName}>Eu</Text>
                <Text style={[styles.message, styles.myMessage]}>
                  {message.message}
                </Text>
              </View>
            ) : (
              <View style={styles.messageWrapper}>
                <Text style={styles.userName}>{message.username}</Text>
                <Text style={styles.message}>{message.message}</Text>
              </View>
            ),
          )}
      </ScrollView>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputMessage}
          multiline={true}
          returnKeyType="send"
          onSubmitEditing={() => submitMessage()}
          onChangeText={(message) => setInputMessage(message)}
          value={inputMessage}
          numberOfLines={5}
          placeholder={`Diga olá para ${data.username}`}
        />
        <TouchableOpacity
          style={styles.buttonSend}
          onPress={() => submitMessage()}>
          <View style={styles.iconWrapper}>
            <Icon style={styles.iconSend} name="send" size={35} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Room;
