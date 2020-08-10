import * as React from 'react';
import { Text, TextInput } from 'react-native-paper';
import { View } from 'react-native';

export class ContentProfile extends React.Component {


    render() {

        const name = "Vinicius";
        const lastName = "Andrade";

        return (
            <View style={{ padding: '10% 142px' }} >

                <TextInput style={{
                    height: '50%', width: '70%', borderColor: 'gray', backgroundColor: 'white',
                    borderWidth: 0.5, marginTop: '1%', marginBottom: '1%'
                }} value={name}/>

                <TextInput style={{
                    height: '50%', width: '70%', borderColor: 'gray', backgroundColor: 'white',
                    borderWidth: 0.5, marginTop: '1%', marginBottom: '1%'
                }} value={ lastName } />

            </View>
        );
    };
}


export class ContentCursos extends React.Component {

    render() {

        return (

            <Text>
                &nbsp;
                Conteúdo dos cursos
            </Text>
        );
    };
}

export class ContentPagamentos extends React.Component {


    render() {
        return (

            <Text>
                &nbsp;
                Conteúdo dos pagamentos
            </Text>
        );
    };
}

export class ContentConta extends React.Component {


    render() {
        return (

            <Text>
                &nbsp;
                Conteúdo da cpnta
            </Text>
        );
    };
}
