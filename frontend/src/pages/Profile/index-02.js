import React, { useState } from 'react';
import { View, StatusBar, ScrollView, Text, Animated, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { Avatar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
const Profile = () => {
    const [scrollY] = useState(new Animated.Value(0))

    return (

        <SafeAreaView style={{ flex: 1 }}>

            <Animated.View style={[styles.header,
            {
                transform: [{
                    scaleY: scrollY.interpolate({
                        inputRange: [10, 140],
                        outputRange: [1, .6],
                        extrapolate: 'clamp'
                    })
                }, {
                    translateY: scrollY.interpolate({
                        inputRange: [10, 140],
                        outputRange: [0, -100 / 3],
                        extrapolate: 'clamp'
                    })
                }],
                opacity: scrollY.interpolate({
                    inputRange: [10, 140],
                    outputRange: [.9, 1],
                    extrapolate: 'clamp'
                })
            }]} >
                <LinearGradient
                    // Button Linear Gradient
                    colors={['rgba(1, 1, 19,.8)','rgba(4,4,117,.85)', 'rgba(4,4,117,.9)']}
                    style={{ flex: 1, flexDirection: 'row', height: '100%', alignItems: 'center',justifyContent:'center' }}>
                    <Animated.View style={[styles.containerAvatar, {
                        transform: [
                            {
                                scaleX: scrollY.interpolate({
                                    inputRange: [10, 170],
                                    outputRange: [1, .6],
                                    extrapolate: 'clamp'
                                })
                            }
                        ]
                    }]}>
                        <Avatar.Text label={'MA'} style={styles.avatar} color='white' />
                    </Animated.View>
                    <Animated.Text style={[styles.userName, {
                        transform: [{
                            scaleY: scrollY.interpolate({
                                inputRange: [10, 140],
                                outputRange: [1, 1.8],
                                extrapolate: 'clamp'
                            })
                        }]
                    }]}>

                        Matheus Alves
                </Animated.Text>
                </LinearGradient>
            </Animated.View>

            <Animated.ScrollView
                style={{
                    transform: [{
                        scaleY: scrollY.interpolate({
                            inputRange: [10, 170],
                            outputRange: [1, Dimensions.get('screen').height / (Dimensions.get('screen').height - 90)],
                            extrapolate: 'clamp'
                        })
                    }]
                }}
                scrollEventThrottle={16}
                onScroll={Animated.event([{
                    nativeEvent: {
                        contentOffset: { y: scrollY }
                    },

                }],
                    { listener: (event) => { console.log(event.nativeEvent.contentOffset.y) }, useNativeDriver: true })}
                contentContainerStyle={{ paddingBottom: 50 }}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </Animated.ScrollView>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        borderBottomWidth:3,
        borderBottomColor:'lightgray',
        
        // marginHorizontal: 7,
        height: 100,
     
    },
    containerAvatar: {
        width: 70,
        height: 70,
        marginLeft: 20,

    },
    avatar: {
        width: 65,
        height: 65,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 65 / 2,
        backgroundColor:'rgba(4,4,117,1)'
    },
    box: {
        height: 300,
        backgroundColor: '#DDD',
        margin: 7,
        borderRadius: 5
    },
    userName: {
        flex: 1,
        fontSize: 22,
        paddingLeft: 20,
        fontWeight: '700',
        color: "rgba(255,255,255,.95)",
        alignSelf: "center",
    }


})
export default Profile                                                                                                                                                                                                                                                                                             
