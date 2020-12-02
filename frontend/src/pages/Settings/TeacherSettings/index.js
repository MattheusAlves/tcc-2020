import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import Textarea from 'react-native-textarea';
import LinearGradient from 'react-native-linear-gradient';

import Accordion from '../UserSettings/components/Accordion';
import defaultStyles from '../UserSettings/styles';
import api from '../../../services/api';
import styles from './styles';
import {useAuth} from '../../../contexts/auth'

const TeacherSettings = (props) => {
  const [bio, setBio] = useState(props.data.bio);
  const [academicFormation, setAcademicFormation] = useState(
    props.data.academicFormation,
  );
  const [modalVisibility, setModalVisibility] = useState(false);
  const {user} = useAuth()

  const update = async (param) => {
    await api
      .put(`/teacher/update/informations/${user._id}`, {
        bio: param.bio,
        academicFormation: param.academicFormation,
      })
      .then((result) => {})
      .catch((err) => console.log(err));
  };
  const updateBio = () => {
    setModalVisibility(!modalVisibility);
    update({bio});
  };
  const updateAcademicFormation = () => {
    update({academicFormation});
  };
  return (
    <View style={{flex: 1}}>
                
      <TouchableOpacity
        // style={defaultStyles.settingOptionWrapper}
        onPress={() => props.navigation.navigate('CreateClass')}>
        <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#3D7AFD', '#000000']}
                style={[{flex: 1}, defaultStyles.settingOptionWrapper]}
                onPress={() => props.navigation.navigate('CreateClass')}>
        <IconFontAwesome5 name="chalkboard-teacher" size={28} color="white" />
        <Text style={defaultStyles.settingOption}>
          Cadastrar/Atualizar Aulas
        </Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={defaultStyles.settingOptionWrapper}
        onPress={() => setModalVisibility(true)}>
        <IconMaterialCommunity name="bio" size={38} color="white" />
        <Text style={defaultStyles.settingOption}>Atualizar Bio</Text>
      </TouchableOpacity>
      <Accordion
        title="Formação Acadêmica"
        setText={setAcademicFormation}
        submit={updateAcademicFormation}
        value={academicFormation}
      />
      <Modal
        isVisible={modalVisibility}
        useNativeDriver={true}
        onBackdropPress={() => setModalVisibility(false)}
        style={{alignItems: 'center', height: 10}}>
        <View style={styles.viewModal}>
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            onChangeText={(text) => setBio(text)}
            maxLength={200}
            placeholder={'Conte um pouco sobre você e sua formação'}
            placeholderTextColor={'#c7c7c7'}
            underlineColorAndroid={'transparent'}
            value={bio}
          />
          <TouchableOpacity
            style={styles.buttonSubmitWrapper}
            onPress={() => updateBio()}>
            <Text style={styles.buttonSubmit}>Feito!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default TeacherSettings;
