import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  AsyncStorage,
  ImageBackground,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import { styles } from "./style";
import DialogComponent from "../../components/Dialog";

export default function Login({ navigation }) {
  console.log('renderizou novamente')
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dialogState, setDialogState] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const _showDialog = () => setDialogState(true);
  const _hideDialog = () => setDialogState(false);

  const { sign } = useAuth();

  async function handleSubmit() {

    if (!email || !password) {
      setDialogMessage("Digite usuário e senha");
      setDialogState(true);
      return 0;
    }
    sign(email, password)

  }

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 25,
    }).start();
  }, []);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/images/studyBackground.jpeg")}
    >
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Avatar
            size="xlarge"
            icon={{ name: "user", type: "font-awesome" }}
            // overlayContainerStyle={{backgroundColor: 'blue'}}
            activeOpacity={0.7}
            containerStyle={{ flex: 1 }}
          />
        </View>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{ translateY: offset.y }],
            },
          ]}
        >
          <View style={styles.section}>
            <Icon
              style={styles.icon}
              name="at"
              type="material-community"
              color="black"
            />
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
            <Icon
              style={styles.icon}
              name="lock-question"
              type="material-community"
              color="black"
            />
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
            onPress={() =>               
             navigation.navigate("Register")}
          >
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
