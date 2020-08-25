import React, { Component,useState } from 'react';
import { View, Text, Image, ScrollView, Animated } from 'react-native';

import styles from './style'
// import { Container } from './styles';
const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Profile = () => {
  const [scrollY,setScrollY] = useState(new Animated.Value(0))
  const headerHeight = scrollY.interpolate({
    inputRange: [0,HEADER_SCROLL_DISTANCE],
    outputRange:[HEADER_MAX_HEIGHT,HEADER_MIN_HEIGHT],
    extrapolate:'clamp'
  })
  return (
    <View style={styles.fill}>
      <ScrollView style={styles.fill}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{nativeEvent:{contentOffset:{y:scrollY}}}]
      )}>
        <Text style={{fontSize:32}}>iireiwriewjri wejijriweirewjrijweiojriwejriewjrjwjreiojrewiorjweiorjiowejriowjrwji</Text>
      </ScrollView>
      <Animated.View style={[styles.header,{height:headerHeight}]}>
        <View style={styles.bar}>
          <Text style={styles.title}>Title</Text>
        </View>
      </Animated.View>
    </View>

  )
}

export default Profile;