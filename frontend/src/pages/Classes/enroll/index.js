import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {format} from 'date-fns';
import Textarea from 'react-native-textarea';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import {TextInputMask} from 'react-native-masked-text';

import styles from './style';
import Avatar from '../../../components/Avatar';
import api from '../../../services/api';
import {useAuth} from '../../../contexts/auth';

const enrollment = ({route, navigation}) => {
  const [classe, setClasse] = useState(null);
  const [classHour, setClassHour] = useState(null);
  const [dayClass, setDayClass] = useState(null);
  const [classGoals, setClassGoals] = useState('');
  const {user} = useAuth()

  useEffect(() => {
    const {classe} = route.params;
    console.log(classe._id);
    setClasse(classe);
  }, []);

  const submitForm = () => {
    //user/class
    if (classGoals) {
      api
        .post(`/enrollment/create/${user._id}/${classe._id}`, {
          goals: classGoals,
          days: dayClass,
          hour: classHour,
        })
        .then((result) => {
          console.log(result);
          createButtonAlert('Sucesso', 'Matrícula Registrada');
          navigation.navigate('Chat');
        })
        .catch((err) => {
          if (err.response.status === 304) {
            createButtonAlert(
              'Aviso',
              'Você já está matriculado(a) nesta aula',
            );
          } else {
            console.log(err.response.message);
            createButtonAlert(
              'Error',
              'Campos obrigatórios não foram preenchidos',
            );
          }
        });
    } else {
      createButtonAlert('Error', 'Campos obrigatórios não foram preenchidos');
    }
  };

  const createButtonAlert = (title, message) =>
    Alert.alert(
      title,
      message,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );

  return (
    <>
      {!classe && <ActivityIndicator />}

      {classe && (
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.teacher}>
              <Avatar
                name={classe.user.name}
                styles={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 10,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 10,
                  backgroundColor: '#285BC8',
                  borderWidth: 2,
                  borderColor: 'lightgray',
                }}
              />
              <Text style={styles.name}>{classe.user.name}</Text>
              <Text style={styles.teacherSince}>
                {`Professor na plataforma desde ${format(
                  new Date(classe.teacher.createdAt),
                  'dd/MM/yyyy',
                )}`}
              </Text>
            </View>
            <View style={styles.classe}>
              <Text style={styles.discipline}>
                {classe.discipline.disciplineName}
              </Text>
              <Text style={styles.pupils}>
                12 Alunos Matrículados nesta Aula
              </Text>
              <Text style={styles.priceLabel}>
                Preço da hora Aula:
                <Text style={styles.price}>{` R$:${(classe.hourClassPrice / 100)
                  .toFixed(2)
                  .replace('.', ',')}`}</Text>
              </Text>
              <View style={styles.ratings}>
                <Text style={styles.rate}>12 Avaliaram como ÓTIMO</Text>
                <Text style={styles.rate}>05 Avaliaram como BOM</Text>
                <Text style={styles.rate}>05 Avaliaram como RUIM</Text>
              </View>
            </View>
            <View style={styles.form}>
              <Textarea
                containerStyle={styles.textareaContainer}
                style={styles.textarea}
                onChangeText={(text) => setClassGoals(text)}
                // defaultValue={this.state.text}
                maxLength={160}
                placeholder={
                  'Conte ao professor um pouco sobre o que você espera aprender'
                }
                placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
              />
            </View>
            <View style={styles.dateHourContainer}>
              {/* <View style={styles.date}>
                <DropDownPicker
                  items={[
                    {
                      label: 'Segunda',
                      value: 'Segunda',
                      icon: () => (
                        <Icon name="calendar" size={18} color="gray" />
                      ),
                    },
                    {
                      label: 'Terça',
                      value: 'Terça',
                      icon: () => (
                        <Icon name="calendar" size={18} color="gray" />
                      ),
                    },
                    {
                      label: 'Quarta',
                      value: 'Quarta',
                      icon: () => (
                        <Icon name="calendar" size={18} color="gray" />
                      ),
                    },
                    {
                      label: 'Quinta',
                      value: 'Quinta',
                      icon: () => (
                        <Icon name="calendar" size={18} color="gray" />
                      ),
                    },
                    {
                      label: 'Sexta',
                      value: 'Sexta',
                      icon: () => (
                        <Icon name="calendar" size={18} color="gray" />
                      ),
                    },
                    {
                      label: 'Sábado',
                      value: 'Sábado',
                      icon: () => (
                        <Icon name="calendar" size={18} color="gray" />
                      ),
                    },
                    {
                      label: 'Domingo',
                      value: 'Domingo',
                      icon: () => (
                        <Icon name="calendar" size={18} color="gray" />
                      ),
                    },
                  ]}
                  placeholder="Selecione um dia"
                  searchable={true}
                  multipleText="%d itens foram selecionados."
                  defaultValue={1}
                  dropDownMaxHeight={150}
                  multiple={true}
                  style={{backgroundColor: '#fafafa'}}
                  itemStyle={{
                    justifyContent: 'flex-start',
                  }}
                  dropDownStyle={{backgroundColor: '#fafafa'}}
                  searchable={true}
                  onChangeItem={(item) => setDayClass(item)}
                />
              </View> */}
              {/* <TextInputMask
                type={'datetime'}
                required={true}
                options={{
                  format: 'HH:mm',
                }}
                style={styles.hour}
                value={classHour}
                placeholder="Horário HH:mm"
                onChangeText={(hour) => {
                  setClassHour(hour);
                }}
              /> */}
            </View>
            <TouchableOpacity
              style={styles.enroll}
              onPress={() => submitForm()}>
              <Text style={styles.enrollText}>
                REGISTRAR MATRICULA E FALAR COM O PROFESSOR
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </>
  );
};

//conte um pouco sobre o que você espera aprender e quais são suas dificuldades
//inclua informaçõs sobre horário da aula
//o que você espera do professor
//Se der tempo, adicionar para poder escolher mais de um dia e um horário

export default enrollment;
