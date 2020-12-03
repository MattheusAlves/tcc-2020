import React, { useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, Animated, TouchableOpacity, SafeAreaView } from 'react-native';
import Svg, { Path } from 'react-native-svg'
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'
import IconMessage from 'react-native-vector-icons/Entypo'

const components = (props) => {

    let name = useRef(props.name.split(" ")).current
    if (name.length >= 2) {
        name = name[0].charAt(0).concat(name[1].charAt(0)).toUpperCase()
    } else {
        name = name[0].charAt(0)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.topNavigator} >
                <TouchableOpacity style={styles.backButton} onPress={() => props.navigation.goBack()}>
                    <Icon size={45} name="leftcircle" color='white' />
                </TouchableOpacity>
            </View>
            <Animated.View style={[styles.container, {
                transform: [{
                    translateY: props.scrollY.interpolate({
                        inputRange: [10, 140],
                        outputRange: [0, -75 / 3],
                        extrapolate: 'clamp'
                    })
                }]
            }
            ]}>
                <Animated.View style={styles.header}>
                    <Svg height="101" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.svg}>
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 45.0163L17 46.8537C34 48.6911 69 52.3659 103 45.0163C137 37.6667 171 19.2927 206 24.8049C240 30.3171 274 60.6341 308 60.6341C343 60.6341 377 30.3171 394 14.6992L411 0V113H394C377 113 343 113 308 113C274 113 240 113 206 113C171 113 137 113 103 113C69 113 34 113 17 113H0V45.0163Z" fill="#285BC8" stroke="white" strokeWidth="2.2" />
                    </Svg>
                    <View style={styles.userInformation}>
                        <TouchableOpacity style={styles.msg}>
                            <IconMessage name="message" size={33} color='white' />
                        </TouchableOpacity>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.username} numberOfLines={1} ellipsizeMode="tail">{props.name}</Text>
                        </View>
                        <Avatar.Text size={74} label={name} color='white' style={styles.avatar} />
                    </View>
                </Animated.View>
            </Animated.View>
            <Animated.View style={[styles.content, {
                transform: [{
                    translateY: props.scrollY.interpolate({
                        inputRange: [10, 140],
                        outputRange: [80, 55],
                        extrapolate: 'clamp'
                    })
                }]
            }]}>
                {props.children}
            </Animated.View>
        </SafeAreaView>
    )
}

export default components;

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        borderColor: "transparent",
        position: 'absolute',
        zIndex: 10,
    },
    topNavigator: {
        zIndex: 30
    },
    userInformation: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        top: 40,
        right: 5,
        left: 0
    },
    content: {
        flex: 1
    },
    svg: {
        width: Dimensions.get('screen').width,

    },
    avatar: {
        position: 'absolute',
        borderWidth: 2.2,
        borderColor: 'white',
        color: 'white',
        backgroundColor: '#3D7AFD',
        right: 0,
    },
    header: {
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(69,68,68,1)',
        paddingTop: 30
    },
    backButton: {
        width: 50,
        marginLeft: 3,
        marginTop: 3,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2
    },
    username: {
        fontSize: 24,
        color: 'white',
        left: '-5%',
        top: 50,
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        width: 300
    },
    msg: {
        position: 'absolute',
        alignSelf: 'center',
        borderWidth: 2.2,
        backgroundColor: '#3D7AFD',
        borderColor: 'white',
        padding: 6,
        borderRadius: 20,

    },
    // usernameContainer:{
    //     flexDirection:"row",
    //     justifyContent:'flex-start'
    // }
})