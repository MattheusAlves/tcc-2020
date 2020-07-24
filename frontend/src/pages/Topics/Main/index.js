import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Chip, Drawer, Divider, List } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler';

import styles from './style'
import api from '../../../services/api'
import AutoCompInput from '../../../components/AutoCompInput';
import Topics from '../../../components/Topics'
import Dialog from '../../../components/Dialog'

const Topic = ({ navigation }) => {
  const [userDisciplines, setUserDisciplines] = useState([])
  const [topics, setTopics] = useState([])
  const [dialog, setDialog] = useState(false)

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
          disciplines: userDisciplines,
          limit: 5
        }
      }).then((topics) => {
        console.log("Topicos", topics.data)
        setTopics(topics.data)
      })
    }
  }, [userDisciplines])



  const _onCloseChip = (id) => {
    if (userDisciplines.length > 1) {
      setUserDisciplines([...userDisciplines.filter(item => item.id != id)])
    }
    else {
      setUserDisciplines([])
      setTopics([])
    }
  }
  const onPressTopic = (topic) => {
    console.log("press")
    navigation.navigate('Topic',{topic:topic})
  }

  function addCategory(category) {
    console.log(category)
    if (userDisciplines.length > 5) {
      setDialog(true)
      return
    }
    if (userDisciplines.findIndex(item => item.id === category.id) != -1) {
      return
    }
    setUserDisciplines([...userDisciplines, { name: category.disciplineName, id: category.id }])
  }

  return (
    <>
      <View style={styles.status} />

      <View style={styles.container}>
        <AutoCompInput topics={topics} addCategory={addCategory} />
        <StatusBar barStyle='light-content' backgroundColor='rgba(59,89,152,1)' />


        <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }}>

          <View style={styles.chipContainer}>
            {userDisciplines.map((discipline) => (
              <Chip
                style={styles.chip}
                textStyle={{ fontSize: 12 }}
                mode="outlined"
                disabled={false}
                onClose={() => _onCloseChip(discipline.id)}
                onPress={() => _onPressChip()}>
                <Text>{discipline.name}</Text>
              </Chip>
            ))}
          </View>
          <Topics topics={topics} onPress={onPressTopic}/>
        </ScrollView>

        <Dialog dialogState={dialog} onDismiss={() => setDialog(false)}
          title="Limite excedido"
          message="Remova uma categoria para adicionar mais" />
      </View>
    </>
  )
}
/**inserir um chip com as disciplinas de interesse do usuário 
* e ao clicar carregar os tópicos das mesmas
* https://callstack.github.io/react-native-paper/chip.html
* https://callstack.github.io/react-native-paper/fab-group.html
*/

export default Topic;