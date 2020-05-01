import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
} from "react-native";

import commonStyles from "../commonStyles";

export default function Auth() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 25,
    }).start();
  }, []);
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}></View>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY: offset.y }],
          },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Seu melhor e-mail"
          keyboardType="email-address"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry={true}
          autoCompleteType="password"
          onChangeText={() => {}}
        />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuíta</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: commonStyles.colors.authBody,
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    width: "90%",
    paddingBottom: 50,
  },
  input: {
    ...commonStyles.input,
    width: "90%",
    marginBottom: 15,
    fontSize: 17,
  },
  btnSubmit: {
    ...commonStyles.button,
  },
  submitText: {
    fontWeight: "bold",
    color: commonStyles.colors.mainText,
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: commonStyles.colors.mainText,
  },
});
