import React, { useEffect, useState, useReducer, useRef } from 'react';
import { Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, ActivityIndicator, Alert, Modal } from 'react-native';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import RangeSlider, { Slider } from 'react-native-range-slider-expo';

import styles from './style'
import SearchHeader from '../../components/SearchHeader'
import api from '../../services/api'
import Avatar from '../../components/Avatar'

import { useLocation } from '../../contexts/location'

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
  const [locationError, setLocationError] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [modalVisibility, setModalVisibility] = useState(false)
  const [distance, setDistance] = useState(0)

  const alertMessageDisableLocation = useRef('Por favor, ative o GPS em configurações').current
  const alertMessageAllowLocation = useRef("Por favor, permita o acesso à sua localização").current
  const { storedLocation, storeLocation } = useLocation()

  useEffect(() => {
    (async () => {
      try {
        const active = await Location.hasServicesEnabledAsync() // vm catch here
        if (!active) {
          setLocationError(true)
          setAlertMessage(alertMessageDisableLocation)
        }
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setLocationError(true)
          setAlertMessage(alertMessageAllowLocation)
        }
        const locationCurrent = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = locationCurrent.coords
        if (latitude && longitude) {
          setLocation({ latitude, longitude })
          storeLocation({ latitude, longitude })
        }
      } catch (exception) {
        getLastKnowLocation()
      }
    })();

  }, [])

  useEffect(() => {
    (async () => {
      console.log(location)
      if (location && location.longitude != null && location.latitude != null)
        api.get('/classes/by/location', {
          params: {
            coordinates: [-70.95614061, 40.23197035],
            //  [location.longitude, location.latitude],
            limit: state.limit,
            distance: state.distance
          }
        })
          .then((result) => {
            setClasses(result.data)
          })
          .catch((error) => {
            console.log(error)
          })
    })()
  }, [location])

  const getLastKnowLocation = async () => {
    try {
      const locationLastKnown = await Location.getLastKnownPositionAsync()
      const { latitude, longitude } = locationLastKnown.coords
      if (latitude && longitude) {
        setLocation({ latitude, longitude })
      }
    } catch (e) {
      if (storedLocation.latitude && storedLocation.longitude) {
        setLocation({ latitude: storedLocation.latitude, longitude: storedLocation.longitude })
      } else
        console.log('exception get last now location', e)
    }
  }

  const createButtonAlert = () =>
    Alert.alert(
      "Localização",
      alertMessage,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  return !classes ?
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <StatusBar barStyle='light-content' backgroundColor='white' />
      <ActivityIndicator size={55} color='rgba(138,171,255,1)' />
      {locationError == true && createButtonAlert()}
    </View>
    :
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle='light-content' backgroundColor='rgba(138,171,255,1)' />
      <SearchHeader setModalVisibility={setModalVisibility} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibility}
        onRequestClose={() => {
        }}
      >
        <View style={{ flex: 1, marginLeft: 10, marginRight: 10, alignItems: "stretch", justifyContent: "center", zIndex: 10 }}>
       
        </View>
      </Modal>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {classes.map((classe) => (
            < View style={styles.class} key={classe._id}>
              <View style={styles.content} >
                <View style={styles.profile}>
                  <Text style={styles.teacher}>Professor</Text>
                  <TouchableOpacity>
                    <Avatar size={65} name={classe.user.name} style={styles.avatar} color='white' />
                    <Text style={styles.teacherName} numberOfLines={1}>{classe.user.name}</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.classInformation}>
                  <Text style={styles.discipline}>{classe.discipline.disciplineName}</Text>
                  <Text style={styles.price}>{`Preço da hora Aula R$:${classe.hourClassPrice}`}</Text>
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



