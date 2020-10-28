import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './style'

const enroll = ({ route, navigation }) => {
  useEffect(() => { 
    const { classe } = route.params
    console.log(route.params)
    console.log(classe)
  }, [])

  return (
    <View style={styles.container}>

    </View>
  )
}

//conte um pouco sobre o que você espera aprender e quais são suas dificuldades
//inclua informaçõs sobre horário da aula
//o que você espera do professor

export default enroll;