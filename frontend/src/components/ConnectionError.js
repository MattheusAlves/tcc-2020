import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
// import background from '../assets/images/error_complete.png'
// https://undraw.co/search
import ErrorBackgroundSvg from './ErrorBackgroundSvg'

const ConnectionError = ({ navigation }, props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.touchable} onPress={() => props.refresh()}>
          <Text style={styles.refreshText}>REFRESH</Text>
          <Icon name="refresh" size={20} color='#43187A' />
        </TouchableOpacity>
      </View>
      <ErrorBackgroundSvg />
    </View>
  )
}

export default ConnectionError;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

