import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";

import commonStyles from "../commonStyles";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [offset] = useState(new Animated.ValueXY({ x: 80, y: 0 }));

  useEffect(() => {
    Animated.spring(offset.x, {
      toValue: 0,
      speed: 3,
      bounciness: 20,
    }).start();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Animated.View style={[
          styles.container,
          {
            transform: [{ translateX: offset.x }],
          },
        ]}>
        <Text>TESTE!</Text>
        <TextInput
          style={[styles.input,styles.inputName]}
          placeholder="Nome"
          autoCorrect={false}
          value={name}
          onChangeText={(name) => setName(name)}
        />
        <TextInput
          style={styles.input}
          placeholder="Seu melhor E-mail"
          keyboardType="email-address"
          autoCorrect={false}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          textContentType="password"
          secureTextEntry={true}
          autoCompleteType="password"
          autoCorrect={false}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmação"
          textContentType="password"
          secureTextEntry={true}
          autoCompleteType="password"
          autoCorrect={false}
          value={confirmPassword}
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
        />
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.registerText}>Registrar</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    ...commonStyles.input,
    borderRadius:2,
    width: "90%",
    marginBottom: 13,
    fontSize: 17,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 2,
  },
  inputName:{
    marginBottom:18
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: commonStyles.colors.authBody,
  },
  container: {
    alignItems: "center",
    width: "90%",
  },
  btn: {},
  registerText: {
    fontWeight: "bold",
    color: commonStyles.colors.mainText,
    fontSize: 18,
  },
  btn: {
    ...commonStyles.button,
    marginTop: 15,
  },
});
