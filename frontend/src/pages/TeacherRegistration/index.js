import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar
} from 'react-native';
import Geocoder from 'react-native-geocoding';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-paper';
import Textarea from 'react-native-textarea';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Snackbar} from 'react-native-paper';

import styles from './styles';
import Book from './components/Book';
import getLocation from '../../utils/getLocation';
import api from '../../services/api';

const TeacherRegistration = ({navigation}) => {
  const [cpf, setCpf] = useState();
  const [bio, setBio] = useState();
  const [academicFormation, setAcademicFormation] = useState();
  const [address, setAddress] = useState();
  const [location, setLocation] = useState({
    latitude: undefined,
    longitude: undefined,
  });
  const [cep, setCep] = useState();
  const [apiKey] = useState('AIzaSyBQnWKmfBMPw6sOo7sHlpvmolyN5_6YG6Q');
  const [snackVisibility, setSnackVisibility] = useState(false);
  const [snackMessage, setSnackMessage] = useState(
    'Você foi cadastrado como professor na plataforma',
  );
  useEffect(() => {
    console.log(location);
    if (location.latitude && location.longitude) {
      Geocoder.init(apiKey);

      Geocoder.from({
        latitude: location.latitude,
        longitude: location.longitude,
      })
        .then((json) => {
          var location = json.results[0].geometry.location;
          console.log(json.results[0].address_components);
          setAddress(json.results[0].address_components[1].short_name);
          setCep(json.results[0].address_components[6].short_name);
        })
        .catch((error) => console.warn(error));
    }
  }, [location]);

  useEffect(() => {
    async function getActualLocation() {
      await getLocation()
        .then((result) => {
          console.log('executou location');
          setLocation({latitude: result.latitude, longitude: result.longitude});
        })
        .catch((err) => {
          getLastKnowLocation()
            .then((location) => {
              setLocation({
                latitude: location.latitude,
                longitude: location.longitude,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        });
    }
    getActualLocation();
    
  }, []);

  const searchCep = () => {
    Geocoder.from(cep)
      .then((json) => {
        var location = json.results[0].geometry.location;
        setAddress(json.results[0].formatted_address);
        setLocation({
          latitude: location.latitude,
          longitude: location.longitude,
        });
      })
      .catch((error) => console.log(error));
  };
  const onDismissSnackBar = () => {
    setSnackVisibility(false);
    navigation.goBack();
  };

  const registerTeacher = async () => {
    await api
      .post('/teacher/create/5fb6b537af602b017d823b55', {
        cpf,
        bio,
        academicFormation,
        location: {
          //always <longitude,latitude>
          coordinates: [location.longitude, location.latitude],
        },
      })
      .then((result) => {
        console.log(result);
        setSnackVisibility(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3D7AFD" />
      <ScrollView>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Cadastro de Professor no SMSE</Text>
          <Book />
        </View>
        <View style={styles.form}>
          <TextInput
            label="CPF"
            placeholder="Insira seu CPF"
            value={cpf}
            onChangeText={(text) => setCpf(text)}
            mode="flat"
            style={styles.input}
          />
          <TextInput
            label="Formação acadêmica/profissional"
            placeholder="Insira sua formação"
            value={academicFormation}
            onChangeText={(text) => setAcademicFormation(text)}
            mode="flat"
            style={styles.input}
          />
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            onChangeText={(text) => setBio(text)}
            maxLength={200}
            placeholder={'Conte um pouco sobre você e sua formação'}
            placeholderTextColor={'gray'}
            underlineColorAndroid={'transparent'}
            value={bio}
          />
          <TextInput
            label="Endereço"
            placeholder="Endereço"
            value={address}
            onChangeText={(text) => setAddress(text)}
            mode="flat"
            style={styles.input}
          />
          <View style={styles.cepSearchWrapper}>
            <TextInput
              label="CEP"
              placeholder="CEP"
              value={cep}
              onChangeText={(text) => setCep(text)}
              mode="flat"
              style={[styles.input, styles.inputSearchCep]}
            />
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => searchCep()}>
              <Icon
                name="search"
                size={40}
                color="white"
                style={styles.iconSearch}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => registerTeacher()}>
            <Text style={styles.submitText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
        <Snackbar
          visible={snackVisibility}
          onDismiss={onDismissSnackBar}
          duration={3000}
          action={{
            label: 'OK!',
            onPress: () => {
              onDismissSnackBar();
            },
          }}>
          {snackMessage}
        </Snackbar>
      </ScrollView>
    </View>
  );
};

export default TeacherRegistration;
