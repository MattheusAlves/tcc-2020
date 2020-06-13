import {
    StyleSheet,
     Animated,
     Dimensions
  } from "react-native";
  
import commonStyles from "../../commonStyles";

export const styles = StyleSheet.create({
    input: {
      ...commonStyles.input,
      borderRadius:4,
      width: "90%",
      marginBottom: 13,
      fontSize: 17,
      borderBottomRightRadius: 12,
      borderTopRightRadius: 4,
    },
    inputName:{
      marginBottom:18
    },
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    //   backgroundColor: commonStyles.colors.authBody,
    },
    backgroundImage: {
        flex: 1,
        height: Dimensions.get("screen").height,
        width: "100%",
        backgroundColor: "blue",
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