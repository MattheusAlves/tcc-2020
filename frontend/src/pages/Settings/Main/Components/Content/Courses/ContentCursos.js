
import * as React from 'react';
import { Text, TextInput, Button, Paragraph } from 'react-native-paper';
import { View, Picker } from 'react-native';

export class ContentCursos extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selectedValue: `java` }
    }

    render() {

        return (
            <View style={{ marginTop: `5%`}}>

                {/*  O proximo passo eh Usar o link 
                https://pt.stackoverflow.com/questions/166777/como-comentar-bloco-de-c%C3%B3digo-em-jsx-react
                para inserir um JChoose File no botáo Download para baixar o certificado para o computadosr
                */}

                <Text>
                    <Paragraph>Escolhe o certificado do curso </Paragraph>

                </Text>
                <Picker
                    selectedValue={this.state.selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <View>
                <Button ode="contained" onPress={() => console.log('Pressed')}>
                    Abrir
                </Button>
                <Button ode="contained" onPress={() => console.log('Pressed')}>
                    Download
                </Button>
                </View>                
            </View>
        );
    };
}