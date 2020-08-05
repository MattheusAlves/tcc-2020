
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Divider, Text } from 'react-native-paper';
import styles from './index.css';
import { Avatar } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import { List } from 'react-native-paper';
import { Button, Title,Paragraph , Col, Container, Row, Header, Grid } from 'react-native-paper';
import Modal from './Modal';
import UserSettings from './UserSettings/index';
import { Dimensions, View } from 'react-native'

const DeviceWidth = Dimensions.get('window').width
//import { Container } from 'native-base';



const Settings = () => {

  
  return (
    <View style={{width:'60%', height:'85%' , marginTop: '2px', alignSelf: 'center'}} >
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center',  flexWrap: 'wrap' }}>

        <View style={{
          width: '25%', height: '100%', borderRightWidth: 1, borderTopWidth: 1
          , borderLeftWidth: 1, borderBottomWidth: 1, backgroundColor: 'white'
        }} >

           {/* Menu do lado esquerdo */}
          <Avatar.Image size={64} source={require('../../assets/images/photoProfile.png')} />
        
          <List.Accordion
            title="Perfil"
            left={props => <List.Icon {...props} icon={require('../../assets/images/account-box.png')} />}>
            <List.Item title="Editar" style={{cursor:'pointer'}} />
          </List.Accordion>
          <Divider />

          <List.Accordion
            title="Cursos"
            left={props => <List.Icon {...props} icon={require('../../assets/images/book-open-page-variant.png')} />}>
            <List.Item title="First item" style={{cursor:'pointer'}} />
          </List.Accordion>
          <Divider />

          <List.Accordion
            title="Pagamentos"
            left={props => <List.Icon {...props} icon={require('../../assets/images/cash-usd-outline.png')} />}>
            <List.Item title="Editar" style={{cursor:'pointer'}}/>
          </List.Accordion>
          <Divider />

          <List.Accordion
            title="Conta"
            left={props => <List.Icon {...props} icon={require('../../assets/images/key-variant.png')} />}>
            <List.Item title="First item" style={{cursor:'pointer'}} />
            <List.Item title="Excluir" style={{cursor:'pointer'}} />
          </List.Accordion>
          <Divider />
        </View>

        {/* Título na div superior */}
        <View style={{ width: '75%',height:'100%', alignSelf:'stretch'}}>
          <View style={{ height: '10%', backgroundColor: 'white', borderRightWidth: 1, borderTopWidth: 1
          , borderLeftWidth: 1, borderBottomWidth: 1 }} >
            <Title id="teste" style={{ textAlign:'center'}}>Título</Title>
            </View>

          {/* Título na div inferior - conteúdo */}
          <View style={{ height: '91%', backgroundColor: 'white', borderRightWidth: 1, borderTopWidth: 1
          , borderLeftWidth: 1, borderBottomWidth: 1 }} >
            <Paragraph>Aqui será o conteúdo do menu escolhido à esquerda.</Paragraph>
          </View>
        </View>     


      </View>



      <Button icon={require('../../assets/images/subdirectory-arrow-left.png')}>
        Voltar
      </Button>
    </View>
  );
};

export default Settings;