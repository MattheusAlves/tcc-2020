import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Chip, Searchbar, IconButton, Drawer, Divider } from 'react-native-paper'

import styles from './style'
const Topic = () => {
  useEffect(() => {
    //pesquisar como implementar pesquisa com  mongoose
    // https://www.luiztools.com.br/post/como-criar-um-mecanismo-de-busca-com-nodejs-mongodb/

  }, [])

  const _onCloseChip = () => { }
  const _onPressChip = () => { }
  
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
      <Searchbar
        placeholder="Search"
        style={styles.searchbar}
      // onChangeText={onChangeSearch}
      // value={searchQuery}
      />
      <View style={styles.topics}>
        <TouchableOpacity>
          <Drawer.Item
            style={{ backgroundColor: '#64ffda' }}
            icon="star"
            label="First Item"
          /></TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Drawer.Item
            style={{ backgroundColor: '#64ffda' }}
            icon="star"
            label="First Item"
          />
        </TouchableOpacity>
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