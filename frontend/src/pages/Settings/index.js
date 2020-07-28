
import { View } from 'react-native';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Divider, Text } from 'react-native-paper';
import styles from './index.css';
import { Avatar } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import { List } from 'react-native-paper';
import { Button } from 'react-native-paper';
import Modal from './Modal';


const styleText = {
  color: 'black',
}

function teste() {

  return <Modal></Modal>;
}

const Settings = () => {

  return (
    <View>

      <Avatar.Image size={64} source={require('../../assets/images/photoProfile.png')} />

      <List.Accordion
        title="Perfil"
        left={props => <List.Icon {...props} icon={require('../../assets/images/account-box.png')} />}>
        <List.Item title="Editar" onClick={teste()} />
      </List.Accordion>
      <Divider />
      <List.Accordion
        title="Cursos"
        left={props => <List.Icon {...props} icon={require('../../assets/images/book-open-page-variant.png')} />}>
        <List.Item title="First item" />
      </List.Accordion>
      <Divider />
      <List.Accordion
        title="Pagamentos"
        left={props => <List.Icon {...props} icon={require('../../assets/images/cash-usd-outline.png')} />}>
        <List.Item title="Editar" />
      </List.Accordion>
      <Divider />
      <List.Accordion
        title="Conta"
        left={props => <List.Icon {...props} icon={require('../../assets/images/key-variant.png')} />}>
        <List.Item title="First item" />
        <List.Item title="Excluir" />
      </List.Accordion>
      <Divider />
      <Button icon={require('../../assets/images/subdirectory-arrow-left.png')}>
        Voltar
      </Button>
    </View>
  );
  
};

export default Settings;