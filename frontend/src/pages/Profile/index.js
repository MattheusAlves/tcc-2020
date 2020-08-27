import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity,Linking } from 'react-native';
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
  const sendOnWhatsapp = (number) =>{
    const url = 'whatsapp://send?text=oi'+'&phone=5519997706148';
    Linking.openURL(url).then((data) => {
      console.log("Whatsapp Opened")
    }).catch((error) => {
      console.log(error)
    })
  }
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
                <Text >Geografia</Text>
              </View>
            </View>
          </View>
          <View style={styles.userContact}>
            <View style={styles.numberContainer}>
              <TouchableOpacity style={styles.numberContainer} onPress={() => sendOnWhatsapp()}>
                <Icon name="whatsapp" size={30} color="green" style={{ margin: 3 }} />
                <Text style={styles.telephoneNumber}>(19)997706148</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.userBio}>
            <Text style={styles.bio}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
          </View>
            <Text style={styles.class}>Aulas Particulares</Text>
          <View style={styles.classInformation}>
              <Icon name='caret-right' size={45} color='lightgray' style={styles.next}/>
            <ScrollView horizontal={true} contentContainerStyle={styles.scrollClasses} showsHorizontalScrollIndicator={false}>
              <View style={styles.classes}>
                <View style={styles.classPrice}>
                  <View style={styles.disciplineContainer}>
                    <Text style={styles.discipline} >Geografia</Text>
                  </View>
                  <Text style={styles.priceLabel}>Preço hora aula</Text>
                  <Text style={styles.price}>R$14,90</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView >
    </View >
  )
}

export default Profile;