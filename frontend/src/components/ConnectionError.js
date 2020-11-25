import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity,Dimensions,ImageBackground,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
// import background from '../assets/images/error_complete.png'
// https://undraw.co/search
import ErrorBackgroundSvg from './ErrorBackgroundSvg'

const ConnectionError = ({ navigation }, props) => {
  return (
    <View style={styles.container}>
      {/* <ErrorBackgroundSvg style={styles.svg}/> */}
      <Image
      style={styles.svg}
      source={require('../assets/images/errorFinal3.png')}/>

      <View style={styles.content}>
        <TouchableOpacity style={styles.touchable} onPress={() => props.refresh()}>
          <Text style={styles.refreshText}>REFRESH</Text>
          <Icon name="refresh" size={20} color='#43187A' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ConnectionError;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:Dimensions.get('window').width,
    height:Dimensions.get('screen').height,
  },
  svg:{
    flex:1,
    position:'absolute',
    // alignItems:'center',
    // alignSelf:"center",
    resizeMode:'contain',
    // justifyContent:'center',
    // backgroundColor:'blue',
    height:Dimensions.get('screen').height,
    width:Dimensions.get('screen').width,
  },  
  touchable: {
    borderRadius: 8,
    padding: 10,
    width: 245,
    height: 76,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
    bottom: 100
  },
  labelStyle: {
    color: 'red'
  },
  refreshText: {
    color: '#43187A',
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 24
  }
})

