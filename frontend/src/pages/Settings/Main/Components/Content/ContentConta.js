import * as React from 'react';
import { Text, List, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';
import { FormControl, FormHelperText, FormControlLabel, Input, InputLabel } from '@material-ui/core';

export class ContentConta extends React.Component {


    render() {
        return (

            <View style={{ padding: '10% 142px', marginTop: '5%', margin: 'auto' }} >

                <List.Accordion
                    title="Configuração Senha"
                    style={{ width: '100%' }}
                    left={props => <List.Icon {...props} /*icon={require('../../../../../assets/images/lock.png')} */ />}>

                    <TextInput
                        placeholder='Senha antiga'
                        style={{
                            height: '30px', width: '100%', borderColor: 'gray', backgroundColor: 'white',
                            borderWidth: 0.5, marginTop: '1%', marginBottom: '1%'
                        }} />


                    <TextInput
                        placeholder="Confirme a senha antiga"
                        style={{
                            height: '30px', width: '100%', borderColor: 'gray', backgroundColor: 'white',
                            borderWidth: 0.5, marginTop: '1%', marginBottom: '1%'
                        }} />

                    <TextInput
                        placeholder="Senha nova"
                        style={{
                            height: '30px', width: '100%', borderColor: 'gray', backgroundColor: 'white',
                            borderWidth: 0.5, marginTop: '1%', marginBottom: '1%'
                        }} />

                    <TextInput
                        placeholder="Confirme a senha nova"
                        style={{
                            height: '30px', width: '100%', borderColor: 'gray', backgroundColor: 'white',
                            borderWidth: 0.5, marginTop: '1%', marginBottom: '1%'
                        }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '2%' }}>

                        <Button style={{ marginLeft: '6%' }}
                            mode="contained" onPress={() => console.log('Pressed')}>
                            Salvar
                    </Button>

                        <Button style={{ marginLeft: '6%' }}
                            mode="contained" onPress={() => console.log('Pressed')}>
                            Limpar
                    </Button>

                    </View>
                </List.Accordion>

                <List.Accordion
                    title="Deletar Conta"
                    style={{ width: '100%' }}
                    left={props => <List.Icon {...props} /*icon={require('../../../../../assets/images/lock.png')} */ />}>

                    <TextInput
                        placeholder="Senha atual"
                        style={{
                            height: '30px', width: '100%', borderColor: 'gray', backgroundColor: 'white',
                            borderWidth: 0.5, marginTop: '1%', marginBottom: '1%'
                        }} />

                    <Button style={{ textAlign:'center'}}
                        mode="contained" onPress={() => console.log('Pressed')}>
                        Deletar conta
                    </Button>

                </List.Accordion>

            </View>
        );
    };
}