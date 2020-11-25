import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import Svg from './Svg/NotFoundError'

const NotFoundError = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.messageWraper}>
                <Text style={styles.message}>{props.message}</Text >
            </View>
            <Svg />
            <TouchableOpacity style={styles.button} onPress={() => props.press()}>
                <Text style={styles.buttonText}>{props.buttonText}</Text>
            </TouchableOpacity>

        </View >
    )
}

export default NotFoundError;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:0
    },
    messageWraper: {
        borderWidth: 3,
        borderColor: '#8AABFF',
        width: Dimensions.get('window').width - 60,
        marginBottom: 10,
        padding: 5,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 13,
        },
        shadowOpacity: .25,
        shadowRadius: 4,

        elevation: 3,
        alignItems: "center",
        justifyContent: 'center'

    },
    message: {
        fontSize: 20,
        color: '#787878',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button: {
        marginTop: 20,
        width: 234,
        height: 55,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: '#8AABFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffff',
        textTransform: 'uppercase'
    }


})