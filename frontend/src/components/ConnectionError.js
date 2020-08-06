import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
// import background from '../assets/images/error_complete.png'
// https://undraw.co/search
import ErrorBackgroundSvg from './ErrorBackgroundSvg'

const ConnectionError = () => {
  return (
    <View style={styles.container}>
      <ErrorBackgroundSvg />
     </View>
  )
}

export default ConnectionError;

const styles = StyleSheet.create({
    container:{
      flex:1,
      // resizeMode:'contain'
    }
})

