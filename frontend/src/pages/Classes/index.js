import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

import styles from './style'
import SearchHeader from '../../components/SearchHeader'

function Classes() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle='light-content' backgroundColor='rgba(138,171,255,1)' />
      <SearchHeader />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.class}>
            <View style={styles.content}>
              <View style={styles.profile}>
                <Text style={styles.teacher}>Professor</Text>
                <TouchableOpacity>
                  <Avatar.Text size={65} label='MA' style={styles.avatar} color='white' />
                  <Text style={styles.teacherName} numberOfLines={1}>Matheus Alves</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.classInformation}>
                <Text style={styles.discipline}>Português</Text>
                <Text style={styles.price}>Preço da hora Aula R$:15,90</Text>
                <Text style={styles.distance}>Há 15 metros de você</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.classEnrollmentContainer}>
              <Text style={styles.classEnrollment}>Matricular-se</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>


      </View>
    </SafeAreaView >
  )
}
export default Classes



