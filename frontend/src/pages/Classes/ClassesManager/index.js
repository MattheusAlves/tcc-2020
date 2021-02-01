import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert
} from 'react-native';

import styles from './styles';
import Svg from './components/Svg';
import Svg404 from './components/Svg404';
import api from '../../../services/api';
import {useAuth} from '../../../contexts/auth';
import Avatar from '../../../components/Avatar';
import {Snackbar} from 'react-native-paper';

const ClassesManager = ({navigation}) => {
  const [requests, setRequests] = useState();
  const [activeClasses, setActiveClasses] = useState();
  const [option, setOption] = useState('requests');
  const [notFoundRequests, setNotFoundRequests] = useState(false);
  const [notFoundActive, setNotFoundActive] = useState(false);
  const [snackMessage,setSnackMessage] = useState('')
  const [snackVisibility,setSnackVisibility] = useState(false);
  const {user} = useAuth();

  useEffect(() => {
    if (option === 'requests') {
      api
        .get(`/enrollment/by/teacher/${user._id}`)
        .then((result) => {
          if (result.data.length === 0) {
            setNotFoundRequests(true);
          } else {
            setRequests(result.data);
          }
        })
        .catch((err) => console.log(err));
    } else if (option === 'active') {
      api
        .get(`/enrollment/active/by/teacher/${user._id}`)
        .then((result) => {
          if (result.data.length === 0) {
            setNotFoundActive(true);
          } else setActiveClasses(result.data);
        })
        .catch((err) => console.log(err));
    }
  }, [option,requests,activeClasses]);

  const onDismissSnackBar = () => setSnackVisibility(false);
  const approveEnrollment = (id) => {
    api
      .put(`/enrollment/approve/${user._id}/${id}`)
      .then((result) => {
        console.log(result);
        setSnackMessage('Matrícula aprovada')
        setSnackVisibility(true)
        setRequests('')
      })
      .catch((err) => console.log(err.response));
  };
  const disapproveEnrollment = (id) => {
    console.log(id)
    api.delete(`/enrollment/disapprove/${user._id}/${id}`).then(() => {
      setSnackMessage('Matrícula removida')
      setSnackVisibility(true)
    }).catch((err) => {
      Alert.alert('Erro inesperado')
    })
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Svg style={{marginTop: 10}} />
        <View style={styles.optionsWrapper}>
          <TouchableOpacity
            style={[
              styles.optionWrapper,
              {backgroundColor: option === 'requests' ? '#285BC8' : '#3D7AFD'},
            ]}
            onPress={() => setOption('requests')}>
            <Text style={styles.option}>Solicitações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionWrapper,
              {backgroundColor: option === 'active' ? '#285BC8' : '#3D7AFD'},
            ]}
            onPress={() => setOption('active')}>
            <Text style={styles.option}>Aulas ativas</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {option === 'requests' ? (
          <View style={styles.requestsWrapper}>
            {requests && requests.length > 0
              ? requests.map((request) => (
                  <View style={styles.enrollmentWrapper} key={request.user._id}>
                    <View style={styles.userWrapper}>
                      <Avatar
                        name={request.user.name}
                        styles={styles.avatar}
                        backgroundColor="white"
                      />
                      <Text style={styles.userName}>{request.user.name}</Text>
                    </View>
                    <View style={styles.classInformation}>
                      <Text
                        style={
                          styles.discipline
                        }>{`Aula de ${request.discipline.disciplineName}`}</Text>
                      <Text style={styles.price}>{`Preço da hora aula ${(
                        request.Class.hourClassPrice / 100
                      )
                        .toFixed(2)
                        .replace('.', ',')}`}</Text>
                    </View>
                    <View style={styles.bioWrapper}>
                      <Text style={styles.goals}>{`${request.goals}`}</Text>
                    </View>
                    <TouchableOpacity
                      style={[styles.button, styles.buttonApproved]}
                      onPress={() => approveEnrollment(request._id)}>
                      <Text style={styles.textButton}>
                        Aprovar matrícula
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => disapproveEnrollment(request._id)}
                      style={[styles.button, styles.buttonDisapprove]}>
                      <Text style={styles.textButton}>Recusar matrícula</Text>
                    </TouchableOpacity>
                  </View>
                ))
              : !notFoundRequests && (
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color="white" />
                  </View>
                )}
            {notFoundRequests && (
              <View style={styles.requestsNotFoundWrapper}>
                <Svg404 />
                <Text style={styles.requestsNotFound}>
                  Você ainda não possui nenhuma solicitação de matrícula
                </Text>
              </View>
            )}
          </View>
        ) : (
          <View style={styles.activeWrapper}>
            {activeClasses && activeClasses.length > 0
              ? activeClasses.map((classe) => (
                  <View style={styles.enrollmentActiveWrapper}>
                    <View style={styles.userWrapper}>
                      <Avatar
                        name={classe.user.name}
                        styles={styles.avatar}
                        backgroundColor="white"
                      />
                      <Text style={styles.userName}>{classe.user.name}</Text>
                    </View>
                    <View style={styles.classInformation}>
                      <Text
                        style={
                          styles.discipline
                        }>{`Aula de ${classe.discipline.disciplineName}`}</Text>
                      <Text style={styles.price}>{`Preço da hora aula ${(
                        classe.Class.hourClassPrice / 100
                      )
                        .toFixed(2)
                        .replace('.', ',')}`}</Text>
                    </View>
                    <TouchableOpacity style={[styles.button, styles.buttonApproved]} onPress={() => navigation.navigate('Room',{
                        username: classe.user.name,
                        room: undefined,
                        userId: classe.user._id,})}>
                      <Text style={styles.textButton}>Falar com aluno</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.button, styles.buttonDisapprove]}
                      onPress={() => disapproveEnrollment(classe._id)}>
                      <Text style={styles.textButton}>Excluir matrícula</Text>
                    </TouchableOpacity>
                  </View>
                ))
              : !notFoundActive && (
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color="white" />
                  </View>
                )}
            {notFoundActive && (
              <View style={styles.requestsNotFoundWrapper}>
                <Svg404 />
                <Text style={styles.requestsNotFound}>
                  Você ainda não possui nenhuma aula ativa com alunos
                  matrículados
                </Text>
                <TouchableOpacity
                  style={styles.myClassesWrapper}
                  onPress={() => navigation.navigate('CreateClass')}>
                  <Text style={styles.myClasses}>Minhas Aulas</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </ScrollView>
      <Snackbar
        visible={snackVisibility}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        {snackMessage}
      </Snackbar>
    </View>
  );
};

export default ClassesManager;
