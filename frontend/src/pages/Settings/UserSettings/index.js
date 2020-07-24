import React, { useState } from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const UserSettings = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [disciplines, setDiscipline] = useState([])

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Configurações" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <Appbar.Content title="Title" style={colorContent} />
      <Divider />
      <Appbar.Content title="Title" className={styles.colorContent} />
      <Divider />
    </View>
  )
}

export default UserSettings;