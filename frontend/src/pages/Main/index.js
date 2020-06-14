import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import MapView,{Marker} from 'react-native-maps'

import mapStyle from '../../helpers/MapConfig'
/*
  Adicionar Fisrt login no backendo para o usuario escolher as disciplinas
  EJETAR EXPO E ADICIONAR REACT NATIVE MAPS AQUI
  1- Como selecionar usuário que estão perto?
  2- Como diferenciar professores de diferentes disciplinas no mapa?
  3-implementar geolocalização no backend
  */
export default function Main() {
  
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
         initialRegion={{
          latitude:-22.9650905,
          longitude:-47.140226,
          latitudeDelta: 42.0000,
          longitudeDelta: 42.0000
        }}
  
      showsUserLocation={true}
  ><Marker coordinate={{
    latitude:-22.9650905,
    longitude:-47.140226,
   
  }}/>
  </MapView>
       </View>
    );
  }

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: '100%',
    height: '100%'
  },
});

