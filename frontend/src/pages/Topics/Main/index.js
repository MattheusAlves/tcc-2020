import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StatusBar, RefreshControl, ActivityIndicator } from 'react-native';
import { Chip, Divider } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './style'
import api from '../../../services/api'
import AutoCompInput from '../../../components/AutoCompInput';
import Topics from '../../../components/Topics'
import Dialog from '../../../components/Dialog'
import TopicsNotFound from '../../../components/TopicsNotFound'
import ConnectionError from '../../../components/ConnectionError'
import { useTopic } from '../../../contexts/topic'


const Topic = ({ navigation }) => {
  const [userDisciplines, setUserDisciplines] = useState([])
  const [topics, setTopics] = useState([])
  const [dialog, setDialog] = useState(false)
  const [dialogError, setDialogError] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const { setData } = useTopic()

  useEffect(() => {
    getUserDisciplines().then((disciplines) => {
      setUserDisciplines(disciplines)
      setLoading(false)
    })
  }, [])

 
  useEffect(() => {
    if (userDisciplines && userDisciplines.length >= 1) {
      api.get(`/question/by/categories`, {
        params: {
          disciplines: userDisciplines,
          limit: 5
        }
      }).then((topics) => {
        if (topics.length < 1) {
        } else
          setTopics(topics.data)
      })
    }
  }, [userDisciplines])

  async function getUserDisciplines() { 
    return api.get(`/user/disciplines/5f2d5641fa9ab023fc52734a`).then((response) => {
      error === true ? setError(false) : ''
      const formatedUserDisciplines = response.data.disciplines.map((discipline) => {
        return { name: discipline.disciplineName, id: discipline._id }

      })
      return formatedUserDisciplines
    }).catch((error) => {
      console.log(error)
      setDialogError(true)
      setError(true)

    })

  }


  const onCloseChip = useCallback((id) => {
    if (userDisciplines.length > 1) {
      setUserDisciplines([...userDisciplines.filter(item => item.id != id)])
    }
    else {
      setUserDisciplines([])
      setTopics([])
    }
  }, [userDisciplines])

  const onPressTopic = useCallback((topic) => {
    navigation.navigate('Topic', { topic: topic })
  })

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    getUserDisciplines().then((disciplines) =>{
      setUserDisciplines(disciplines)
      setRefreshing(false)
    })
  })

  const addCategory = useCallback((category) => {
    if (userDisciplines.length > 5) {
      setDialog(true)
      return
    }
    if (userDisciplines.findIndex(item => item.id === category.id) != -1) {
      return
    }
    setUserDisciplines([...userDisciplines, { name: category.disciplineName, id: category.id }])
  }, [userDisciplines])

  const onPressCategory = async(idCategory, category) => {
    setData(idCategory, category)
    navigation.navigate('TopicsByCategory')
  }
  return (
   error ?
      <ConnectionError />
      :
      
    <>
      <View style={styles.status} />
      <StatusBar barStyle='light-content' backgroundColor='rgba(59,89,152,1)' />
      <AutoCompInput topics={topics} addCategory={addCategory} />
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing}
              onRefresh={onRefresh} style={{ paddingTop: 160 }} />
          }>
          {loading === true ?
            <View style={styles.containerLoading}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
            :

            <View style={styles.chipContainer}>
              {userDisciplines &&
                userDisciplines.length >= 1 &&
                userDisciplines.map((discipline) => (
                  <Chip
                    style={styles.chip}
                    key={discipline.id}
                    textStyle={{ fontSize: 12 }}
                    mode="outlined"
                    disabled={false}
                    onClose={() => onCloseChip(discipline.id)}
                  >
                    <Text>{discipline.name}</Text>
                  </Chip>
                ))}
            </View>
          }
          {topics.length < 1 && loading !== true && !error &&
            <TopicsNotFound />
          }
         
         
          {topics.length >= 1 &&
            <Topics topics={topics} onPress={onPressTopic} onPressCategory={onPressCategory} />
          }
        </ScrollView>

        <Dialog dialogState={dialog} onDismiss={() => setDialog(false)}
          title="Limite excedido"
          message="Remova uma categoria para adicionar mais" />
        <Dialog dialogState={dialogError} onDismiss={() => setDialogError(false)}
          title="Error!"
          message="Erro ao se comunicar. Verifique sua conexão de rede." />

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



