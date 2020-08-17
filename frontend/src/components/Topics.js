import React, { memo } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native'
import { Drawer, Card, } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'



const Topics = memo((props) => {

    return (
        // <View>
        props.topics.length > 0 && props.topics.map((item) => (
            <View style={styles.container} key={item[0].categoryName}>
                {console.log(item)}
                <TouchableOpacity onPress={() => props.onPressCategory(item[0].body.category._id,item[0].categoryName)}>
                    <Drawer.Item
                        style={styles.drawer}
                        icon="book"
                        label={item[0].categoryName}
                    />
                </TouchableOpacity>
                {item.map((topic) => (
                    <View style={styles.topicContent} key={topic.body._id}>
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
    )

})

export default Topics;

const styles = StyleSheet.create({

    topicContent: {
    },


    card: {
        flex: 1,
        flexDirection: 'row',
        height: 80,
        alignSelf: 'center',
        width: (Dimensions.get('window').width) - 14,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,.2)',
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: .20,

        elevation: 1,

    },
    title: {
        fontSize: 16,
        padding: 0,
        margin: 0,

    },
    touchable: {
        padding: 6,
    },
    textTouchable: {
        color: 'rgb(86, 3, 252)',
        fontWeight: '600'

    },


    drawer: {
        marginBottom: 8,
        backgroundColor: 'rgba(51, 102, 255,.6)',

    }
})