import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Alert,
  AsyncStorage,
} from "react-native";

//import axios config
import api from "../services/api";

import commonStyles from "../commonStyles";

import DialogComponent from "../components/Dialog";

export default function Login({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dialogState, setDialogState] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const _showDialog = () => setDialogState(true);
  const _hideDialog = () => setDialogState(false);

  async function handleSubmit() {
    if(!email || !password){
      setDialogMessage('Digite usuário e senha')
      setDialogState(true)
      return 0
    }
    console.log("Email:", email, " Senha:", password);
    const response = await api
      .post("/signin", {
        email,
        password,
      })

      .then((response) => {
        console.log("data", response.data);
        const { token } = response.data;
        const { _id, name } = response.data.user;
        AsyncStorage.setItem("user", _id);
        AsyncStorage.setItem("token", token);
        AsyncStorage.setItem("name", name);
      })
      .catch((err) => {
        // alert(err.response.data.err);
        console.log("teste");

        setDialogMessage(err.response.data.err);
        setDialogState(true);
      });
  }

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 25,
    }).start();
  }, []);

  return (
    <>
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
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            textContentType="password"
            secureTextEntry={true}
            autoCompleteType="password"
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.registerText}>Criar conta gratuíta</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
      <DialogComponent
        title="Erro!"
        message={dialogMessage}
        dialogState={dialogState}
        onDismiss={() => _hideDialog()}
      />
    </>
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
