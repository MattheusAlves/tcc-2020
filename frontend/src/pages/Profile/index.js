import React, { useState } from 'react';
import { View, Dimensions, Animated, StyleSheet } from 'react-native';

// import { Container } from './styles';
import Header from '../../components/ProfileHeader'

const Profile = () => {
    const [scrollY] = useState(new Animated.Value(0))
    return (
        <View style={{ flex: 1,zIndex:0 }}>
            <View>
            <Header scrollY={scrollY} style={{zIndex:10 }} />
            </View>
            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event([{
                    nativeEvent: {
                        contentOffset: { y: scrollY }
                    },

                }],
                    { listener: (event) => { console.log(event.nativeEvent.contentOffset.y)
                     }, useNativeDriver: true })}
                contentContainerStyle={{ paddingBottom: 50,zIndex:0 }}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </Animated.ScrollView>
        </View>
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