import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'

import api from '../../services/api'
import styles from './style'
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = () => {
  const [profile, setProfile] = useState()

  useEffect(() => {

  }, [])

  return (
    <View style={styles.container} >
      <View style={styles.containerHeader}>
        <View style={styles.divider}>
          <Avatar.Text size={74} label={'MA'} style={styles.avatar} />

        </View>
      </View>
      <View style={styles.chatMessageContainer}>
        <TouchableOpacity style={styles.chatMessage} >
          <Icon name="wechat" size={33} color="blue" style={styles.iconMessage} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.containerBody}>
          <View style={styles.userInformation}>
            <View style={styles.userNameContainer}>
              <Text style={styles.userName}>Matheus Alves</Text>
              <Text>19 anos</Text>
              <Text style={styles.teacherSince}>Professor na plataforma desde 13/05/2019</Text>
            </View>
            <View style={styles.disciplinesContainer}>
              <Text style={styles.disciplineText}>Disciplinas de interesse</Text>
              <View style={styles.disciplinesContent}>
                <Text style={styles.discipline}>Geografia</Text>
              </View>
            </View>
          </View>
          <View style={styles.userContact}>
            <View style={styles.numberContainer}>
              <TouchableOpacity style={styles.numberContainer}>
                <Icon name="whatsapp" size={30} color="green" style={{ margin: 3 }} />
                <Text style={styles.telephoneNumber}>(19)997706148</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.userBio}>
            <Text style={styles.bio}>Matheus Alves Domingos, de natal - Rio grande do norte! Muito prazer.
            Formado em nada na faculgado josé estácio. interessado por JavaScripot, php, node, etc.</Text>
          </View>
          <View style={styles.classInformation}>
            <Text style={styles.class}>Sobre as aulas</Text>
            <View style={styles.classes}>
              <Text>Aulas particulares de:</Text>
              <Text>Geografia, PHP e JavaScript.</Text>
            </View>
          </View>
        </View>
      </ScrollView >
    </View >
  )
}

export default Profile;