import {
    StyleSheet,
    Dimensions,
} from "react-native";
import commonStyles from "../../commonStyles";

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        height: Dimensions.get("screen").height,
        width: "100%",
        backgroundColor: "blue",
    },
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    containerLogo: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        flex: 1,
        alignItems: "center",
        width: "90%",
    },
    input: {
        ...commonStyles.input,
        width: "86%",
        fontSize: 17,
        borderLeftWidth: 0,
        borderLeftColor: "#fff",
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        height: 50,
    },
    btnSubmit: {
        marginTop: 10,
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
    section: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderWidth: 0.4,
        borderColor: "#000",
        height: 53,
        borderRadius: 5,
        marginBottom: 8,
    },
    icon: {
        padding: 0,
        margin: 5,
        height: 25,
        width: 32,
        resizeMode: "stretch",
        alignItems: "center",
    },
});