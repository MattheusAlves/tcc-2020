import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service'

import { useLocation } from '../../contexts/location'
import styles from './style'

import MapView,{Marker} from 'react-native-maps'

import mapStyle from '../../helpers/MapConfig'
/*
  Adicionar Fisrt login no backendo para o usuario escolher as disciplinas
  EJETAR EXPO E ADICIONAR REACT NATIVE MAPS AQUI
  1- Como selecionar usuário que estão perto?
  2- Como diferenciar professores de diferentes disciplinas no mapa?
  3-implementar geolocalização no backend
  */
function Main() {
  const { latitude, longitude, storeLocation } = useLocation()
  useEffect(() => {
    async function getLocation() {
      await Geolocation.getCurrentPosition(pos => {
        storeLocation(pos.coords.latitude, pos.coords.longitude)
      })
    }
    getLocation()
    console.log("T:", latitude, longitude)
  }, [])

  return (
    <View style={styles.container}>
      {/* <MapView style={styles.mapStyle} 
         initialRegion={{
          latitude:-22.9650905,
          longitude:-47.140226,
          latitudeDelta: 42.0000,
          longitudeDelta: 42.0000
        }}
  
      // showsUserLocation={true}
  ><Marker coordinate={{
    latitude:-22.9650905,
    longitude:-47.140226,
   
  }}/>
  </MapView> */}
    </View>
  );
}
export default Main



