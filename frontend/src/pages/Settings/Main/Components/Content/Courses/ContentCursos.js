
import * as React from 'react';
import { Text, TextInput, Button, Paragraph } from 'react-native-paper';
import { View, Picker } from 'react-native';
import { Resolver } from 'dns';


const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')

function download() {
    const url = 'https://unsplash.com/photos/lgwLNOLVw7U/download?force=true';
    const path = Path.resolve(__dirname, 'files', 'teste.jpg')

    const response = Axios({
        method: 'GET',
        url: url,
        responseType: 'stream'
    })

    response.data.pipe(Fs.createWriteStream(path))

    return new Promise((resolve, reject) => {

        response.data.on('end', () => {
            resolve()
        })

        response.data.on('error', err => {
            reject(err)
        })

    })
}

export class ContentCursos extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selectedValue: `java` }
    }

    render() {

        return (
            <View style={{ marginTop: `5%` }}>
                <Text>
                    <Paragraph>Escolhe o certificado do curso </Paragraph>
                </Text>
                <Picker
                    selectedValue={this.state.selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={( itemValue ) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <View>
                    <Button ode="contained" onPress={() => console.log('Pressed')}>
                        Abrir
                </Button>
                    <Button ode="contained" onPress={() => download()}>
                        Download
                </Button>
                </View>
            </View>
        );
    };
}