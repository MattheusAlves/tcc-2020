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
  const [users, setUsers] = useState();
  const {user} = useAuth();

  useEffect(() => {
    api
      .get(`/user/get/${user._id}`)
      .then((user) => {
        console.log(user.data);
        setData({
          username: user.data.name,
          teacher: user.data.teacher,
          room: undefined,
          userId: user.data._id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    //room = mensageiroId/destinatarioId
    if (data && data.username) {
      if (data) initializeSocket(data);
      getOnlineUsers((err, result) => {
        let onlineUsers = JSON.parse(result);
        console.log('online users', onlineUsers);
        setUsers([...onlineUsers]);
        return;
      });
    }

    subscribeToChat((err, message) => {
      if (err) {
        console.log(err);
        return;
      }
      updateNotifications(message.userId, message.message);
    });

    return () => disconnectSocket(data);
  }, [data]);

  const onRefresh = useCallback(() => {
    requestOnlineUsers();
  });

  const updateNotifications = async (k, v) => {
    if (messageNotificatios.has(k)) {
      // messageNotificatios.delete(k)
    }
    console.log(messageNotificatios);
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
        {users.map(
          (user) =>
            user.userId != data.userId && (
              <TouchableOpacity
                style={styles.userWrapper}
                key={user.socketId}
                onPress={() =>
                  navigation.navigate('Room', {
                    username: user.username,
                    socketId: user.socketId,
                    userId: user.userId,
                  })
                }>
                <Avatar
                  styles={styles.avatar}
                  name={user.username}
                  color="white"
                />
                <View style={styles.usernameWrapper}>
                  <Text style={styles.userName}>{user.username}</Text>
                  {user.teacher && <Text style={styles.isTeacher}>Prof.</Text>}
                  {messageNotificatios.has(user.userId) && (
                    <Text style={styles.messageNotification}>
                      {`${user.username}: ${messageNotificatios.get(
                        user.userId,
                      )}`}{' '}
                    </Text>
                  )}
                </View>
                <View style={styles.statusOn} />
                {/* <View style={styles.statusOff} /> */}
              </TouchableOpacity>
            ),
        )}
        {!users ||
          (users.length <= 1 && (
            <View
              style={{
                flex:1,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop:200
              }}>
              <Svg404 />
              <Text style={{fontSize:24, margin:10,textAlign: 'center'}}>Nenhum usuário online no momento</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default Chat;
