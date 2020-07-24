import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native'
import {  Drawer, Card, } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'



const Topics = (props) => {
   
    return (
        //Cada Drawer vai ser o titulo da categoria
        props.topics.length > 0 ? props.topics.map((item) => (
            //Ao clicar expandir
            
            <View style={styles.container}>
                <TouchableOpacity>
                    <Drawer.Item
                        style={styles.drawer}
                        icon="book"
                        label={item[0].categoryName}
                    /></TouchableOpacity>
                {item.map((topic) => (

                    <View style={styles.topicContent}>
                        <TouchableOpacity 
                        onPress={() => props.onPress(topic)}>
                            <Card style={styles.card}>
                                <Card.Title
                                    titleStyle={styles.title}
                                    subtitleStyle={styles.subtitle}
                                    title={topic.body.title}
                                    subtitle={topic.body.description}
                                />
                               
                            </Card>
                        </TouchableOpacity>
                    </View >

                ))}
            </View>

        ))
            : <View style={styles.background}
            >
                {/* <View style={styles.topicsNotFoundView}> */}
                <ImageBackground
                    // source={require('../assets/images/background.jpg')}
                    style={styles.contentTopicsNotFound}>
                    <Text style={styles.topicsNotFoundTitle}>Ainda não há nenhum tópico nas categorias selecionadas</Text>
                    <TouchableOpacity style={styles.touchableSubtitle}>
                        <Text style={styles.topicsNotFoundSubtitle}>Inicia um Tópico <Icon name="rocket" size={30} color="#660066" /></Text>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.logo} source={require('../assets/images/logo2.png')} resizeMode="contain" />
                    </TouchableOpacity>
                </ImageBackground>
                {/* </View> */}
            </View>
    )

}

export default Topics;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        // width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        width: (Dimensions.get('screen').width),
    },
   
    topicContent: {
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        height: 80,
        alignSelf: 'center',
        width: (Dimensions.get('window').width) - 14    ,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,.2)',
        marginBottom: 5

    },
    title: {
        fontSize: 16,
        padding: 0,
        margin: 0,

        // fontWeight:'bold'    
    },
      
    touchable: {
        padding: 6,
    },
    textTouchable: {
        color: 'rgb(86, 3, 252)',
        fontWeight: '600'

    },
    topicsNotFoundView: {
        flex: 1,

        backgroundColor: 'rgba(102, 204, 255,1)'
    },
    contentTopicsNotFound: {
        backgroundColor: 'rgba(255,255,255,.8)',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    topicsNotFoundTitle: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        padding: 10,

    },
    topicsNotFoundSubtitle: {
        fontSize: 19,
        fontWeight: '700',
        textAlign: 'center',
        padding: 20,
        borderRadius: 5,
        backgroundColor: 'rgba(51, 102, 255,.4)',
        textAlign: 'center'
    },
    touchableSubtitle: {
        borderRadius: 5,
        backgroundColor: 'white',
        margin: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 90
    },
    drawer: {
        marginBottom:8,
        backgroundColor: 'rgba(51, 102, 255,.6)',

    }
})