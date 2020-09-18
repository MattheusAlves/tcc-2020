import React from 'react';
import { View, Text, Dimensions, StyleSheet, Animated } from 'react-native';
import Svg, { Path } from 'react-native-svg'
import { Avatar } from 'react-native-paper';

const components = (props) => {
    return (
        <Animated.View style={styles.container} style={{
            transform: [{
                scaleY: props.scrollY.interpolate({
                    inputRange: [10, 140],
                    outputRange: [1, .6],
                    extrapolate: 'clamp'
                }),
                translateY: props.scrollY.interpolate({
                    inputRange: [10, 140],
                    outputRange: [0, -105 / 3],
                    extrapolate: 'clamp'
                })
            }],
        
        
                } }>
            <View style={styles.header}>
                <Svg width="410" height="101" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.svg}>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 45.0163L17 46.8537C34 48.6911 69 52.3659 103 45.0163C137 37.6667 171 19.2927 206 24.8049C240 30.3171 274 60.6341 308 60.6341C343 60.6341 377 30.3171 394 14.6992L411 0V113H394C377 113 343 113 308 113C274 113 240 113 206 113C171 113 137 113 103 113C69 113 34 113 17 113H0V45.0163Z" fill="#0099FF" stroke="#F7EFEF" stroke-width="2" />
                </Svg>
                <View style={styles.content}>
                    <Avatar.Text size={74} label='MA' style={styles.avatar} />
                    <Text style={styles.username}>Matheus Alves</Text>
                </View>
            </View>
        </Animated.View >
    )
}

export default components;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'row',
        flexWrap: 'wrap',
        width: Dimensions.get('screen').width,
        borderBottomWidth: 3,
        borderBottomColor: 'lightgray',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        zIndex:10
    },
    content: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        left: 48,

    },
    svg: {
        width: Dimensions.get('screen').width
    },
    avatar: {
        borderWidth: 2.2,
        borderColor: 'white',
        backgroundColor: '#0099FF',
    },
    header: {
        justifyContent: 'center',
       
        backgroundColor: 'rgba(0,153,255,.4)'
    },
    username: {
        fontSize: 24,
        color: 'white',
        marginLeft: 9,
        alignSelf: 'flex-end',
        fontWeight: 'bold'
    }
})