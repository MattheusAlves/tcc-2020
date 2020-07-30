
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Divider, Text } from 'react-native-paper';
import styles from './index.css';
import { Avatar } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import { List } from 'react-native-paper';
import { Button, Col, Container, Row, Header, Grid } from 'react-native-paper';
import Modal from './Modal';
import UserSettings from './UserSettings/index';
import { Dimensions, View } from 'react-native'

const DeviceWidth = Dimensions.get('window').width
//import { Container } from 'native-base';

const Settings = () => {

  return (
    <View>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center',  flexWrap: 'wrap' }}>

        <View style={{
          width: '20%', height: '100%', borderRightWidth: 1, borderTopWidth: 1
          , borderLeftWidth: 1, borderBottomWidth: 1, backgroundColor: 'powderblue'
        }} >
          <Avatar.Image size={64} source={require('../../assets/images/photoProfile.png')} />
          <List.Accordion
            title="Perfil"
            left={props => <List.Icon {...props} icon={require('../../assets/images/account-box.png')} />}>
            <List.Item title="Editar" />
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
        </View>

        <View style={{ width: '80%', alignSelf:'stretch'}}>
          <View style={{ height: 50, backgroundColor: 'skyblue', borderRightWidth: 1, borderTopWidth: 1
          , borderLeftWidth: 1, borderBottomWidth: 1 }} />

          <View style={{ height: 100, backgroundColor: 'steelblue', borderRightWidth: 1, borderTopWidth: 1
          , borderLeftWidth: 1, borderBottomWidth: 1 }} />

        </View>


      </View>






      <Button icon={require('../../assets/images/subdirectory-arrow-left.png')}>
        Voltar
      </Button>
    </View>
  );
};

export default Settings;