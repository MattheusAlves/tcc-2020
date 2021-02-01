import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {Snackbar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import Avatar from '../../../components/Avatar';
import Accordion from './components/Accordion';
import styles from './styles';
import api from '../../../services/api';
import TeacherSettings from '../TeacherSettings';
import SettingSvg from './components/SettingSvg';
import {useAuth} from '../../../contexts/auth';

const Settings = ({navigation}) => {
  const [Name, setName] = useState('');
  const [Linkedin, setLinkedin] = useState('');
  const [Github, setGithub] = useState('');
  const [Phone, setPhone] = useState();
  const [snackVisibility, setSnackVisibility] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [teacher, setTeacher] = useState();
  const [data, setData] = useState();
  const [refresh,setRefresh] = useState(false) 
  const {user,signOut} = useAuth();

  useEffect(() => {
    async function loadData() {
      api
        .get('user/profile', {
          params: {
            id: user._id,
          },
        })
        .then((result) => {
          let data;
          if (result.data.user) {
            data = result.data.user;
          } else {
            data = result.data;
          }
          setName(data.name);
          setLinkedin(data.linkedin);
          setGithub(data.github);
          setPhone(data.phone);
          setTeacher(data.teacher);
          setData(data);
        })
        .catch((error) => console.log(error));
    }
    loadData();
  }, [user]);

  const update = (param) => {
    api
      .put(`/update/informations/${user._id}`, {
        name: param.Name,
        linkedin: param.Linkedin,
        github: param.Github,
        phone: param.Phone,
      })
      .then((response) => {
        if (param.Name) {
          setSnackVisibility(true);
          setSnackMessage('O seu nome foi atualizado');
        } else if (param.Linkedin) {
          setSnackMessage('O seu Linkedin foi atualizado');
          setSnackVisibility(true);
        } else if (param.Github) {
          setSnackMessage('O seu Github foi atualizado');
          setSnackVisibility(true);
        } else if (param.Phone) {
          setSnackMessage('O seu Número foi atualizado');
          setSnackVisibility(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateBio = () => {
    update({bio: text});
  };
  const updateName = () => {
    update({Name});
  };
  const updateLinkedin = () => {
    update({Linkedin});
  };
  const updateGithub = () => {
    update({Github});
  };
  const updatePhone = (text) => {
    update({Phone});
  };

  const onDismissSnackBar = () => setSnackVisibility(false);
  return !data ? (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="deepskyblue" />
    </View>
  ) : (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#3D7AFD', '#285BC8', '#4F4F55']}
          style={styles.header}>
          <Avatar
            name={Name}
            styles={{
              backgroundColor: '#3D7AFD',
              borderWidth: 2,
              marginLeft: 10,
              borderColor: 'white',
              elevation: 4,
            }}
            size={80}
          />
          <Text style={styles.name}>{Name}</Text>
          <TouchableOpacity style={styles.logoffWrapper} onPress={() => signOut()}>
            <IconMaterialCommunity name="logout" size={30}color="white"/>
            <Text style={styles.logoff}>Sair</Text>
          </TouchableOpacity>
        </LinearGradient>
        <ScrollView contentContainerStyle={{paddingBottom: 10}}>
          <StatusBar backgroundColor="rgba(69,68,68,1)" />

          <Accordion
            title="Nome"
            label="Atualize seu nome"
            setText={setName}
            submit={updateName}
            value={Name}
          />
          <TouchableOpacity style={styles.settingOptionWrapper} onPress={() => navigation.navigate('TopicDashboard')}>
            <IconMaterial
              name="class"
              size={35}
              color="white"
              styles={styles.icon}
            />
            <Text style={styles.settingOption}>Disciplinas de interesse</Text>
          </TouchableOpacity>
          {!teacher && (
            <TouchableOpacity
              onPress={() => navigation.navigate('TeacherRegistration')}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#3D7AFD', '#000000']}
                style={[{flex: 1}, styles.settingOptionWrapper]}>
                <IconMaterialCommunity name="teach" size={35} color="white" />
                <Text style={styles.settingOption}>Dar aulas</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
          <Accordion
            title="Linkedin"
            label="Adicione seu linkedin"
            setText={setLinkedin}
            submit={updateLinkedin}
            value={Linkedin}
          />
          <Accordion
            title="Github"
            label="Adicione seu Github"
            setText={setGithub}
            submit={updateGithub}
            value={Github}
          />
          <Accordion
            title="Telefone"
            label="Adicione seu telefone"
            setText={setPhone}
            submit={updatePhone}
            value={Phone}
            keyboardType="phone-pad"
          />
          {teacher && data && (
            <TeacherSettings data={data} navigation={navigation} />
          )}
        </ScrollView>
        <Snack
          visible={snackVisibility}
          onDismissSnackBar={onDismissSnackBar}
          label="Ok"
          message={snackMessage}
        />
      </View>
    </SafeAreaView>
  );
};
const Snack = (props) => (
  <Snackbar
    visible={props.visible}
    onDismiss={props.onDismissSnackBar}
    duration={3000}
    style={{backgroundColor: 'rgba(69,68,68,1)'}}
    action={{
      label: props.label,
      onPress: () => props.onDismissSnackBar(),
    }}>
    {props.message}
  </Snackbar>
);
export default Settings;
