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
  subscribeToChat,
  joinRoom
} from './Socket';
import styles from './style';

const Chat = ({navigation}) => {
  const [data, setData] = useState({
    username: 'Matheus',
    teacher: true,
    room: undefined,
    userId: '5fadbd24d224723b64ad913f',
  });
  const [teste, setTeste] = useState('');
  const [messageNotificatios, setMessageNotifications] = useState(new Map());
  const [refreshing, setRefreshing] = useState(false);
  const [users, setUsers] = useState([
    // {username: 'Josias', teacher: false, socketId: 1, userId: '11'},
    // {username: 'José', teache: false, socketId: 2, userId: '12'},
    // {username: 'Lucas', teacher: false, socketId: 3, userId: '13'},
    // {username: 'Caio', teacher: true, socketId: 4, userId: '14'},
    // {username: 'Marcio', teacher: true, socketId: 5, userId: '15'},
    // {username: 'André Pereira', teacher: false, socketId: 6, userId: '16'},
  ]);

  useEffect(() => {
    //room = mensageiroId/destinatarioId
    if (data.username) {
      if (data) initializeSocket(data);
      getOnlineUsers(null, (err, result) => {
        let onlineUsers = JSON.parse(result);
        setUsers((users) => [...onlineUsers]);
        return;
      });
    }

    subscribeToChat((err, message) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('recebeu aqui', message);
      updateNotifications(message.userId, message.message);
    });

    return () => disconnectSocket(data);
  }, [data]);

  useEffect(() => {
    console.log('usuários', users);
    console.log(messageNotificatios);
    console.log(teste);
  }, [teste, messageNotificatios]);

  const onRefresh = useCallback(() => {});

  const updateNotifications = async (k, v) => {
    if (messageNotificatios.has(k)) {
      // messageNotificatios.delete(k)
    }
    console.log(messageNotificatios);
    setMessageNotifications((prev) => new Map([...prev, [k, v]]));
  };
 
  return users.length < 1 ? (
    <ActivityIndicator size="large" />
  ) : (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {users.map((user) => (
          <TouchableOpacity
            style={styles.userWrapper}
            key={user.userId}
            onPress={() =>  navigation.navigate('Room', {
              username: user.username,
              socketId: user.socketId,
              userId:user.userId
            })}>
            <Avatar style={styles.avatar} name={user.username} color="white" />
            <View style={styles.usernameWrapper}>
              <Text style={styles.userName}>{user.username}</Text>
              {user.teacher && <Text style={styles.isTeacher}>Prof.</Text>}
              {messageNotificatios.has(user.userId) && (
                <Text style={styles.messageNotification}>
                  {`${user.username}: ${messageNotificatios.get(user.userId)}`}{' '}
                </Text>
              )}
            </View>
            <View style={styles.statusOn} />
            {/* <View style={styles.statusOff} /> */}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Chat;
