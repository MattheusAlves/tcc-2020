import * as React from 'react';
import { Text, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';


export class ContentConta extends React.Component {


    render() {
        return (

            <View style={{ padding: '10% 142px', marginTop: '5%', margin: 'auto' }} >

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

            </View>
        );
    };
}