import React, { useState } from 'react';
import { View, Dimensions, Animated, StyleSheet } from 'react-native';

// import { Container } from './styles';
import Header from '../../components/ProfileHeader'

const Profile = () => {
    const [scrollY] = useState(new Animated.Value(0))
    return (

        <Header scrollY={scrollY}>
            <View style={{ flex: 1}}>

                <Animated.ScrollView
                    scrollEventThrottle={16}
                    onScroll={Animated.event([{
                        nativeEvent: {
                            contentOffset: { y: scrollY }
                        },

                    }],
                        {
                            listener: (event) => {
                                console.log(event.nativeEvent.contentOffset.y)
                            }, useNativeDriver: true
                        })}
                    contentContainerStyle={{ paddingBottom: 50, zIndex: 0 }}
                    style={{ zIndex: 0 }}>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                </Animated.ScrollView>
            </View>
        </Header>
    )
}

export default Profile;

const styles = StyleSheet.create({
    box: {
        height: 300,
        backgroundColor: '#DDD',
        margin: 7,
        borderRadius: 5
    }
})