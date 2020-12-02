import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TextInput} from 'react-native-paper';
import Textarea from 'react-native-textarea';
import {Snackbar} from 'react-native-paper';

import styles from './styles';
import Svg from './components/Svg';
import AutoCompInput from '../../../components/AutoCompInput';
import api from '../../../services/api';
import {useAuth} from '../../../contexts/auth';

const CreateTopic = ({navigation, route}) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [snackVisibility, setSnackVisibility] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const {user} = useAuth();

  useEffect(() => {
    if (route && route.params && route.params.category) {
      console.log(route.params.category);
      setCategory({id:route.params.category.categoryId,disciplineName:route.params.category.categoryName});
    }
  },[]);
  const addCategory = (category) => {
    setCategory(category);
  };
  const onDismissSnackBar = () => {
    setSnackVisibility(false);
    navigation.goBack();
  };
  const submitTopic = async () => {
    if (title != '' && description != '' && category != '') {
      await api
        .post(`/question/create/${user._id}`, {
          title,
          description,
          category: category.id,
        })
        .then((result) => {
          setSnackMessage('O tópico foi postado!');
          setSnackVisibility(true);
        })
        .catch((err) => {
          setSnackMessage('Erro  inesperado, tente novamente');
          setSnackVisibility(true);
          console.log(err);
        });
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#285BC8" />
      <AutoCompInput addCategory={addCategory} />
      <ScrollView>
        <Svg styles={styles.svg} />
        <View style={styles.form}>
          <View style={styles.categoryWrapper}>
            <Icon
              style={[styles.iconCheck]}
              name="check-circle"
              size={35}
              color={category ? 'white' : 'red'}
            />
            <Text style={styles.category}>{`Categoria: ${
              category ? category.disciplineName : ''
            }`}</Text>
          </View>
          <View style={styles.contentWrapper}>
            <TextInput
              mode="flat"
              label="Título"
              placeholder="Escolha um título simples e objetivo"
              style={styles.title}
              onChangeText={(text) => setTitle(text)}
            />
            <Textarea
              containerStyle={styles.textareaContainer}
              style={styles.textarea}
              onChangeText={(text) => {}}
              // defaultValue={this.state.text}
              maxLength={2000}
              placeholder={'Conteúdo'}
              placeholderTextColor={'#c7c7c7'}
              underlineColorAndroid={'transparent'}
              onChangeText={(text) => setDescription(text)}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => submitTopic()}>
              <Text
                style={[
                  styles.submitText,
                  {
                    color:
                      category != '' && title != '' && description != ''
                        ? '#285BC8'
                        : 'gray',
                  },
                ]}>
                POSTAR
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Snackbar
        visible={snackVisibility}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'OK',
          onPress: () => {
            // Do something
          },
        }}
        duration={3000}>
        {snackMessage}
      </Snackbar>
    </View>
  );
};

export default CreateTopic;
