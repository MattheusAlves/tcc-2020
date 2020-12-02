import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  ImageBackground,
  StatusBar
} from 'react-native';

import {useAuth} from '../../contexts/auth';
import {styles} from './style';
import DialogComponent from '../../components/Dialog';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFeather from 'react-native-vector-icons/Feather';

export default function Login({navigation}) {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dialogState, setDialogState] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const _showDialog = () => setDialogState(true);
  const _hideDialog = () => setDialogState(false);

  const {sign,errorMessage} = useAuth();

  async function handleSubmit() {
    if (!email || !password) {
      setDialogMessage('Digite usuário e senha');
      setDialogState(true);
      return 0;
    }
    sign(email, password);
    if(!!errorMessage && errorMessage != ''){
      setDialogMessage(errorMessage);
      setDialogState(true);
    }
  }

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 25,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/images/studyBackground.jpeg')}>
        <StatusBar backgroundColor="rgba(69,68,68,1)"/>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <IconFeather name="user" size={70} color="white" />
        </View>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{translateY: offset.y}],
            },
          ]}>
          <View style={styles.section}>
            <View style={styles.iconWrapper}>
              <Icon
                style={styles.icon}
                name="email"
                color="#35383F"
                size={27}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Seu melhor e-mail"
              keyboardType="email-address"
              autoCorrect={false}
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.section}>
            <View style={styles.iconWrapper}>
              <IconFontisto
                style={styles.icon}
                name="locked"
                color="#35383F"
                size={28}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Criar conta gratuita</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
      <DialogComponent
        title="Erro!"
        message={dialogMessage}
        dialogState={dialogState}
        onDismiss={() => _hideDialog()}
      />
    </ImageBackground>
  );
}
