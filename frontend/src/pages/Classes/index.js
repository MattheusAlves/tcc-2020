import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import ClassesList from './List';
import ClassesManager from './ClassesManager';
import {useAuth} from '../../contexts/auth';
import styles from './styles';
import Capelo from '../../components/Capelo';
import Searching from '../../components/FileSearching';

const Classes = ({navigation}) => {
  const {user} = useAuth();
 
  return user.teacher ? (
    <View style={styles.container}>
      <Text style={styles.title}>Painel do professor</Text>
    <View style={styles.content}>
      <TouchableOpacity style={styles.optionWrapper} onPress={() => navigation.navigate('ClassesList')}>
        <Capelo />
        <Text style={styles.option}>Ver aulas disponíveis</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionWrapper} onPress={() => navigation.navigate('ClassesManager')}>
        <Searching />
        <Text style={styles.option}>Gerencie suas aulas</Text>
      </TouchableOpacity>
    </View>
    </View>
  ) : (
    <ClassesList navigation={navigation}/>
  );
};
export default Classes;
