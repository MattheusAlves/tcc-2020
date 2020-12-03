import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Avatar from '../../components/Avatar';
import {
  initializeSocket,
  disconnectSocket,
  getOnlineUsers,
  requestOnlineUsers,
  subscribeToChat,
  joinRoom,
} from './Socket';
import styles from './style';
import {useAuth} from '../../contexts/auth';
import api from '../../services/api';
import Svg404 from '../../components/Svg404';

const Chat = ({navigation}) => {
  const [data, setData] = useState();
  const [messageNotificatios, setMessageNotifications] = useState(new Map());
  const [refreshing, setRefreshing] = useState(false);
  const [users, setUsers] = useState(new Map());
  const {user} = useAuth();

  useEffect(() => {
    const loadData = async () => {
      api
        .get(`/user/get/${user._id}`)
        .then((user) => {
          setData({
            username: user.data.name,
            teacher: user.data.teacher,
            room: undefined,
            userId: user.data._id,
          });
        })
        .catch((err) => console.log(err));
    };

    loadChats();
    loadData();
  }, []);

  useEffect(() => {
    //room = mensageiroId/destinatarioId
    if (data && data.username) {
      if (data) initializeSocket(data);
      getOnlineUsers((err, result) => {
        setUsers(new Map());
        let onlineUsers = JSON.parse(result);
        onlineUsers.forEach((user) => {
            users.set(user.userId, {
              socketId: user.socketId,
              username: user.username,
            });
        });
        setUsers(new Map(users));
        loadChats();
        return;
      });
    }
    subscribeToChat((err, message) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('chegou',message)
      message.from === user._id
        ? updateNotifications(message.to, message.message)
        : updateNotifications(message.userId, message.message);
    });

    return () => disconnectSocket(data);
  }, [data]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const loadChats = async () => {
    console.log('nsdjn');
    api
      .get(`/chat/load/last/message/${user._id}`)
      .then((messages) => {
        console.log(messages.data);
        messages.data.forEach((message) => {
          if (
            !users.has(
              message.from._id === user._id ? message.to._id : message.from._id,
            )
          ) {
            users.set(
              message.from._id === user._id ? message.to._id : message.from._id,
              {
                username:
                  message.from._id === user._id
                    ? message.to.name
                    : message.from.name,
                socketId: undefined,
              },
            );
          }
          updateNotifications(
            message.from._id === user._id ? message.to._id : message.from._id,
            {
              username:
                message.from._id === user._id
                  ? message.from.name
                  : message.to.name,
              message: message.content,
            },
          );
        });
        setUsers(new Map(users));
      })
      .catch((err) => console.log(err));
  };
  const onRefresh = useCallback(() => {
    loadChats();
    requestOnlineUsers();
  });

  const updateNotifications = async (k, v) => {
    if (messageNotificatios.has(k)) {
      messageNotificatios.delete(k);
    }
    setMessageNotifications((prev) => new Map([...prev, [k, v]]));
  };

  return !data || !users ? (
    <ActivityIndicator size="large" />
  ) : (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {Array.from(users).length > 1 &&
          Array.from(users).map(
            ([index, user]) =>
              index != data.userId && (
                <TouchableOpacity
                  style={styles.userWrapper}
                  key={index}
                  onPress={() =>
                    navigation.navigate('Room', {
                      username: user.username,
                      socketId: user.socketId,
                      userId: index,
                    })
                  }>
                  <Avatar
                    styles={styles.avatar}
                    name={user.username}
                    color="white"
                  />
                  <View style={styles.usernameWrapper}>
                    <Text style={styles.userName}>{user.username}</Text>
                    {user.teacher && (
                      <Text style={styles.isTeacher}>Prof.</Text>
                    )}
                    {messageNotificatios.has(index) && (
                      <Text style={styles.messageNotification}>
                        {`${messageNotificatios.get(index).username}: ${messageNotificatios.get(index).message}`}
                      </Text>
                    )}
                  </View>
                  {user.socketId ? (
                    <View style={styles.statusOn} />
                  ) : (
                    <View style={styles.statusOff} />
                  )}
                </TouchableOpacity>
              ),
          )}
        {!users ||
          (users.length <= 1 && (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 200,
              }}>
              <Svg404 />
              <Text style={{fontSize: 24, margin: 10, textAlign: 'center'}}>
                Nenhum usuário online no momento
              </Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default Chat;
