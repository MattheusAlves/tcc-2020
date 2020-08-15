import * as React from 'react';
import { Text, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';

export class ContentProfile extends React.Component {


    render() {

        return (
            <View style={{ padding: '10% 142px', marginTop: '5%', margin: 'auto' }} >

                <Text style={{ textAlign: 'left !important' }} >Dados Básicos</Text>
                <TextInput
                    placeholder='Nome'
                    style={{
                        height: '30px', width: '100%', borderColor: 'gray', backgroundColor: 'white',
                        borderWidth: 0.5, marginTop: '1%', marginBottom: '1%'
                    }} />

                <TextInput
                    placeholder="Sobrenome"
                    style={{
                        height: '30px', width: '100%', borderColor: 'gray', backgroundColor: 'white',
                        borderWidth: 0.5, marginTop: '1%', marginBottom: '1%'
                    }} />

                <TextInput
                    placeholder="Email"
                    style={{
                        height: '30px', width: '100%', borderColor: 'gray', backgroundColor: 'white',
                        borderWidth: 0.5, marginTop: '1%', marginBottom: '1%'
                    }} />

                <TextInput
                    placeholder="Linkedin"
                    style={{
                        height: '30px', width: '100%', borderColor: 'gray', backgroundColor: 'white',
                        borderWidth: 0.5, marginTop: '1%', marginBottom: '1%'
                    }} />

                <TextInput
                    placeholder="Localização"
                    style={{
                        height: '30px', width: '100%', borderColor: 'gray', backgroundColor: 'white',
                        borderWidth: 0.5, marginTop: '1%', marginBottom: '1%'
                    }} />
                <TextInput
                    placeholder="Bio"
                    multiline={true}
                    numberOfLines={6}
                    style={{
                        height: '100px', width: '100%', borderColor: 'gray', backgroundColor: 'white',
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