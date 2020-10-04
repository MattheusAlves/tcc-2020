import React, { useEffect, useState, useReducer } from 'react';
import { Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import * as Location from 'expo-location';

import styles from './style'
import SearchHeader from '../../components/SearchHeader'
import api from '../../services/api'
import Avatar from '../../components/Avatar'

function reducer(state, action) {
  switch (action.type) {
    case 'incrementLimit':
      return { limit: state.limit + 1 }
    case 'decrementLimit':
      return { limit: state.limit - 1 }
    case 'incrementDistance':
      return { distance: state.distance + 2000 }
    case 'decrementDistance':
      return { distance: state.distance - 2000 }
    default:
      throw new Error()
  }
}

function Classes() {
  const [classes, setClasses] = useState()
  const [location, setLocation] = useState({ latitude: null, longitude: null })
  const [state, dispatch] = useReducer(reducer, { limit: 10, distance: 2000 });
  console.log(state)

  useEffect(() => {

    (async () => {

      try {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          console.log('errou ao pegar localização')
          return 0
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location)
        const { latitude, longitude } = location.coords
        setLocation({ latitude, longitude });

      } catch (exception) {
        throw exception

      }

    })();

  }, [])

  useEffect(() => {
    (async () => {
      if (location && location.longitude != null && location.latitude != null)
        api.get('/classes/by/location', {
          params: {
            coordinates: [location.longitude, location.latitude],
            limit: state.limit,
            distance: state.distance

          }
        })
          .then((result) => {
            if (result) {
              console.log(result.data)
              setClasses(result.data)
            }
          })
          .catch((error) => {
            console.log(error)
          })
    })()
  }, [location])

  return !classes ?
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size={55} color='rgba(138,171,255,1)' />
    </View>
    :
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle='light-content' backgroundColor='rgba(138,171,255,1)' />
      <SearchHeader />
      <View style={styles.container}>
        <ScrollView>
          {classes.map((classe) => (
            <View style={styles.class}>
            {console.log(classe)}
              <View style={styles.content}>
                <View style={styles.profile}>
                  <Text style={styles.teacher}>Professor</Text>
                  <TouchableOpacity>
                    <Avatar size={65} name={classe.user.name} style={styles.avatar} color='white' />
                    <Text style={styles.teacherName} numberOfLines={1}>{classe.user.name}</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.classInformation}>
                  <Text style={styles.discipline}>{classe.classes.discipline.disciplineName}</Text>
                  <Text style={styles.price}>Preço da hora Aula R$:15,90</Text>
                  <Text style={styles.distance}>Há 15 metros de você</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.classEnrollmentContainer}>
                <Text style={styles.classEnrollment}>Matricular-se</Text>
              </TouchableOpacity>
            </View>

          ))}
        </ScrollView>
      </View>
    </SafeAreaView >

}
export default Classes



