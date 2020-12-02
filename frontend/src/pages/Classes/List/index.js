import React, {useEffect, useState, useReducer} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Dimensions,
  RefreshControl,
} from 'react-native';
import Modal from 'react-native-modal';
import Slider from '@ptomasroos/react-native-multi-slider';

import styles from './style';
import SearchHeader from '../../../components/SearchHeader';
import api from '../../../services/api';
import Avatar from '../../../components/Avatar';
import GetLocation from '../../../utils/getLocation';
import NotFoundError from '../../../components/Error/NotFoundError';
import {useAuth} from '../../../contexts/auth';

import {useLocation} from '../../../contexts/location';

function reducer(state, action) {
  switch (action.type) {
    case 'incrementLimit':
      return {limit: state.limit + 1};
    case 'decrementLimit':
      return {limit: state.limit - 1};
    default:
      throw new Error();
  }
}

function Classes({navigation}) {
  const [classes, setClasses] = useState(null);
  const [location, setLocation] = useState({latitude: null, longitude: null});
  const [state, dispatch] = useReducer(reducer, {limit: 10});
  const [locationError, setLocationError] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [distance, setDistance] = useState(2000);
  const [disciplineToSearch, setDisciplineToSearch] = useState(false);
  const [classesNotFound, setClassesNotFound] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const {user} = useAuth();

  const {storedLocation, storeLocation} = useLocation();
  const TopicDashboardNavigation = () => navigation.push('TopicDashboard');
  
  
  useEffect(() => {
    api
      .get(`/disciplines/by/user/${user._id}`)
      .then(() => {
        resolvLocation();
      })
      .catch((err) => {
        if (err.response.status === 404) {
          TopicDashboardNavigation()
        }
      });
  }, [user]);

  const resolvLocation = async () => {
    return new Promise(async (resolve, reject) => {
      GetLocation()
        .then((result) => {
          console.log('result', result)
          setLocation({latitude: result.latitude, longitude: result.longitude});
          storeLocation({
            latitude: result.latitude,
            longitude: result.longitude,
          });
          resolve();
        })
        .catch((err) => {
          getLastKnowLocation()
            .then((location) => {
              setLocation({
                latitude: location.latitude,
                longitude: location.longitude,
              });
              resolve();
            })
            .catch((error) => {
              console.log(err);
              createButtonAlert(err);
              setLocationError(true);
              reject();
            });
        });
    });
  };

  useEffect(() => {
    if (location && location.longitude != null && location.latitude != null) {
      api
        .get(`/classes/by/location/${user._id}`, {
          params: {
            //<[longitude],[latitude]>
            coordinates: JSON.stringify(location),
            limit: JSON.stringify(state.limit),
            distance: JSON.stringify(distance),
            disciplineToSearch: disciplineToSearch
              ? JSON.stringify(disciplineToSearch)
              : null,
          },
        })
        .then((result) => {
          console.log('length:', result.data.length);
          if (result.data.length === 0) {
            setClassesNotFound(true);
            refreshing ? setRefreshing(false) : '';
            console.log('return null');
          } else {
            setClasses(result.data);
            classesNotFound ? setClassesNotFound(false) : '';
            refreshing ? setRefreshing(false) : '';
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location, distance, disciplineToSearch]);

  const getLastKnowLocation = () => {
    return new Promise(async (resolve, reject) => {
      if (storedLocation.latitude && storedLocation.longitude) {
        resolve({
          latitude: storedLocation.latitude,
          longitude: storedLocation.longitude,
        });
      }
      reject();
    });
  };

  const onRefresh = () => {
    setRefreshing(true);
    setDisciplineToSearch(false);
    resolvLocation();
  };

  const searchDisciplines = (discipline) => {
    setClasses(null);
    setDisciplineToSearch(new Array(discipline));
  };
  const createButtonAlert = (message) =>
    Alert.alert(
      'Localização',
      message,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );

  function ModalComponent() {
    return (
      <Modal
        isVisible={modalVisibility}
        useNativeDriver={true}
        onBackdropPress={() => setModalVisibility(false)}>
        <View
          style={{
            height: 100,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}>
          <Text style={styles.labelMaxDistance}>
            Distância Máxima<Text style={styles.meters}>(metros)</Text>
          </Text>
          <Slider
            min={2000}
            max={26000}
            values={[distance]}
            enabledTwo={false}
            enableLabel={true}
            step={2000}
            onValuesChangeFinish={(e) => {
              setDistance(e[0]);
              setModalVisibility(false);
            }}
            markerStyle={{
              width: 26,
              height: 26,
              backgroundColor: 'rgb(89,126,255)',
            }}
            markerContainerStyle={{
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 2,
            }}
            selectedStyle={{backgroundColor: 'rgb(89,126,255)'}}
            trackStyle={{height: 6}}
          />
        </View>
      </Modal>
    );
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#3D7AFD"
      />
      <SearchHeader
        setModalVisibility={setModalVisibility}
        search={searchDisciplines}
      />
      <ModalComponent />
      {!classes && !classesNotFound && (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <ActivityIndicator size={55} color="rgba(138,171,255,1)" />
        </View>
      )}

      {!classes && classesNotFound && (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={{height: Dimensions.get('screen').height - 135}}>
            <NotFoundError
              buttonText="ver disciplinas"
              message="Desculpe! Ainda não existe nenhum professor para estas disciplinas na redondezas"
              press={TopicDashboardNavigation}
            />
          </View>
        </ScrollView>
      )}
      {classes && (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={styles.container}>
            <ScrollView
              contentContainerStyle={styles.scrollView}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
              {classes.map((classe) => (
                <View style={styles.class} key={classe._id}>
                  <Text style={styles.disciplines}>
                    {classe.discipline.disciplineName}
                  </Text>
                  <View style={styles.content}>
                    <View style={styles.profile}>
                      <Text style={styles.teacher}>Professor</Text>
                      <TouchableOpacity>
                        <Avatar
                          size={65}
                          name={classe.user.name}
                          styles={styles.avatar}
                          color="white"
                        />
                        <Text style={styles.teacherName} numberOfLines={1}>
                          {classe.user.name}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {console.log(classe._id)}
                    <View style={styles.classInformation}>
                      <Text style={styles.price}>
                        {`Preço da hora Aula R$:${(classe.hourClassPrice / 100)
                          .toFixed(2)
                          .replace('.', ',')}`}
                      </Text>
                      <Text
                        style={
                          styles.distance
                        }>{`À ${classe.teacher.distance} metros de você`}</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.classEnrollmentContainer}
                    onPress={() =>
                      navigation.navigate('Enroll', {classe: classe})
                    }>
                    <Text style={styles.classEnrollment}>Matricular-se</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </SafeAreaView>
      )}
    </View>
  );
}

export default Classes;
