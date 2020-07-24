
import { View } from 'react-native';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Divider, Text } from 'react-native-paper';
import styles from './index.css';
import { Avatar } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import { List } from 'react-native-paper';
import { Button } from 'react-native-paper';


const styleText = {
  color: 'black',
}

const Settings = () => {


  return (
    <View>

      <Avatar.Image size={64} source={require('../../assets/images/photoProfile.png')} />

      <List.Accordion
        title="Picture Profile"
        left={props => <List.Icon {...props} icon="camera" />}>
        <List.Item title="Visualizar Foto" />
        <List.Item title="Trocar Foto" />
      </List.Accordion>

      <List.Accordion
        title="Organização"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Agenda"
        left={props => <List.Icon {...props} icon="calendar" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

    </View>
  );

};

export default Settings;