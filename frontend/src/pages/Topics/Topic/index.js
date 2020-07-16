import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Chip, Drawer, Divider, List } from 'react-native-paper'

import styles from './style'
import api from '../../../services/api'
import autoCompInput from '../../../components/AutoCompInput'
import AutoCompInput from '../../../components/AutoCompInput';

const Topic = () => {
  const [userDisciplines, setUserDisciplines] = useState([''])
  const [dataSearchInput, setDataSearchInput] = useState([''])
  useEffect(() => {

    /*
      Trazer todas as disciplinas do usuário no use effect e dar opção de procurar novas
      disciplinas com o search input 
      */
    //pesquisar como implementar pesquisa com  mongoose
    // https://www.luiztools.com.br/post/como-criar-um-mecanismo-de-busca-com-nodejs-mongodb/
    // api.get(`user/disciplines/5e8ce51e78cbad20d0228d6f`).then((response) => {
    //   console.log("disciplinas", response.data)
    // })

  }, [])

  const _onCloseChip = () => { }
  const _onPressChip = () => {
    console.log('teste')

  }

  return (
    <View style={styles.container}>
      <View style={styles.chipContainer}>
        <Chip
          style={styles.chip}
          textStyle={{ fontSize: 15 }}
          mode="outlined"
          disabled={true}
          onClose={() => console.log("fechou")}
          onPress={() => console.log('Pressed')}>
          PHP
        </Chip>
      </View>
      {/* <View style={styles.searchInputContainer}> */}
      <AutoCompInput />
      {/* </View> */}
      <View style={styles.topics}>
        <List.Section title="Tópico 1">
          <List.Accordion
            title="teste1"
            left={props => <List.Icon {...props} icon="folder" />}>
            <Text style={{flex:1,margin:0,padding:0}}>Teste</Text>
            <List.Item title="second item" />
          </List.Accordion>
        </List.Section>
        {/* <TouchableOpacity>
          <Drawer.Item
            style={{ backgroundColor: '#64ffda' }}
            icon="star"
            label="First Item"
          /></TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={() => _onPressChip()}>
          <Drawer.Item
            style={{ backgroundColor: '#64ffda' }}
            icon="star"
            label="First Item"
          />
        </TouchableOpacity> */}
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