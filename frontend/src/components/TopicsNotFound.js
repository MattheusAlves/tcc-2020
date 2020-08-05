import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const TopicsNotFound = () => {
    return (
        <View style={styles.background}>
            <View style={styles.containerNotFound}>
                <Text style={styles.topicsNotFoundTitle}>Ainda não há nenhum tópico nas categorias selecionadas</Text>
                <TouchableOpacity style={styles.touchableSubtitle}>
                    <Text style={styles.topicsNotFoundSubtitle}>Inicia um Tópico
                     <Icon name="rocket" size={30} color="#660066" />
                    </Text>
                </TouchableOpacity>
                <Image style={styles.logo} source={require('../assets/images/logo2.png')} resizeMode="contain" />
            </View>
        </View>
    )
}
export default TopicsNotFound

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: (Dimensions.get('screen').width),
        backgroundColor: 'white'
    },
    topicsNotFoundView: {
        flex: 1,
    },
    touchableSubtitle: {
        borderRadius: 5,
        backgroundColor: 'gray',
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: .3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    topicsNotFoundTitle: {
        fontSize: 18,
        textAlign: 'center',
        padding: 8,
        color: 'black',
        fontWeight: '700',


    },
    topicsNotFoundSubtitle: {
        fontSize: 19,
        fontWeight: '700',
        textAlign: 'center',
        padding: 20,
        borderRadius: 5,
        // backgroundColor: 'rgba(51, 102, 255,8)',
        backgroundColor: 'white',
        textAlign: 'center'
    },
    logo: {
        width: 100,
        height: 90,
    },
    containerNotFound: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,

    },
})
