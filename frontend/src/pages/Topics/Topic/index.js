import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Chip, Drawer, Divider, List } from 'react-native-paper'

import styles from './style'
import api from '../../../services/api'
import AutoCompInput from '../../../components/AutoCompInput';
import Topics from '../../../components/Topics'

const Topic = () => {
  const [userDisciplines, setUserDisciplines] = useState([])
  const [dataSearchInput, setDataSearchInput] = useState([''])
  const [topics, setTopics] = useState([])
  useEffect(() => {

    /*
      Trazer todas as disciplinas do usuário no use effect e dar opção de procurar novas
      disciplinas com o search input 
      */
    //pesquisar como implementar pesquisa com  mongoose
    // https://www.luiztools.com.br/post/como-criar-um-mecanismo-de-busca-com-nodejs-mongodb/
    if (userDisciplines.length < 1) {
      api.get(`/user/disciplines/5e8ccfa2c2dff823147e7c9b`).then((response) => {
        console.log("disciplinas", response.data)
        response.data.disciplines.map((discipline) => {
          setUserDisciplines(oldValue => [...oldValue, { name: discipline.disciplineName, id: discipline._id }])
        })
      })
    }

  }, [])

  useEffect(() => {
    if (userDisciplines.length >= 1) {
      console.log("if second effect")
      console.log('rodou api')
      api.get(`/question/by/categories`, {
        params: {
          disciplines: userDisciplines
        }
      }).then((topics) => {
        console.log(topics.data)
        setTopics(topics.data)
      })
    }
  }, [userDisciplines])


  const _onCloseChip = () => { }
  const _onPressChip = () => {
    console.log('teste')
    console.log(userDisciplines)
  }

  return (
    <View style={styles.container}>
      <View style={styles.chipContainer}>
        <Chip
          style={styles.chip}
          textStyle={{ fontSize: 15 }}
          mode="outlined"
          disabled={false}
          onClose={() => console.log("fechou")}
          onPress={() => console.log('Pressed')}>
          PHP
        </Chip>
      </View>
      <View style={styles.main}>
        <AutoCompInput />
      
      <View style={styles.topics}>
        <ScrollView>
          <Topics topics={topics} />
        </ScrollView>
        </View>
      </View>
    </View>
  )
}
/**inserir um chip com as disciplinas de interesse do usuário 
* e ao clicar carregar os tópicos das mesmas
* https://callstack.github.io/react-native-paper/chip.html
* https://callstack.github.io/react-native-paper/fab-group.html
*/

export default Topic;