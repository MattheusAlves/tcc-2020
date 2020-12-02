import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated,
  ImageBackground,
  Alert
} from 'react-native';
import {TextInput} from 'react-native-paper';

import styles from './style';
import Capelo from '../../components/Capelo';
import api from '../../services/api';

export default function Register({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [offset] = useState(new Animated.ValueXY({x: 80, y: 0}));

  useEffect(() => {
    Animated.spring(offset.x, {
      toValue: 0,
      speed: 3,
      bounciness: 20,
      useNativeDriver: true,
    }).start();
  }, []);
  const registerUser = () => {
    api
      .post('/signup', {
        name,
        email,
        password,
      })
      .then((response) => {
        console.log(response)
        Alert.alert(
          "Tudo certo",
          "Seu cadastro foi realizado, faça login na plataforma",
          [
            
            { text: "OK", onPress: () => navigation.navigate('SignIn') }
          ],
          { cancelable: false }
        );
        
      })
      .catch((err) => {
       console.log(err.response.status)
       if(err.response.status === 401){
        Alert.alert(
          "Erro",
          "Já existe um usuário com este e-mail",
          [
            
            { text: "OK", onPress: () => {} }
          ],
          { cancelable: false }
        );
       }
      });
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/images/studyBackground.jpeg')}>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.headerWrapper}>
          <Capelo />
          <Text style={styles.headerTitle}>Cadastre-se na plataforma</Text>
        </View>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{translateX: offset.x}],
            },
          ]}>
          <TextInput
            style={[styles.input, styles.inputName]}
            placeholder="Seu nome"
            label="Nome"
            mode="flat"
            autoCorrect={false}
            value={name}
            onChangeText={(name) => setName(name)}
          />
          <TextInput
            style={styles.input}
            label="e-mail"
            placeholder="Seu melhor E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            style={styles.input}
            label="Senha"
            placeholder=""
            textContentType="password"
            secureTextEntry={true}
            autoCompleteType="password"
            autoCorrect={false}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          <TextInput
            style={styles.input}
            label="Confirme"
            placeholder="Confirmação de senha"
            textContentType="password"
            secureTextEntry={true}
            autoCompleteType="password"
            autoCorrect={false}
            value={confirmPassword}
            onChangeText={(confirmPassword) =>
              setConfirmPassword(confirmPassword)
            }
          />
          
          <TouchableOpacity style={styles.btn} onPress={() => registerUser()}>
            <Text style={styles.registerText}>Registrar</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
