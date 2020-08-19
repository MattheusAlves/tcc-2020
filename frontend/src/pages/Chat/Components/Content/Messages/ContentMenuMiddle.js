import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import { ContentMenuContact } from './ContentMenuContacts';

export class ContentMenuMiddle extends React.Component {

    constructor(props) {
        super(props);
        this.state = { content: "Perfil" }
        this.changeTitle = this.changeTitle.bind(this)
    }

    changeTitle = (content) => {


        if (content == "Mensagens")
            content == "Perfil";
        else if (content == "Cursos")
            content == "Cursos";
        else if (content == "Pagamentos")
            content == "Pagamentos";
        else if (content == "Conta")
            content == "Conta";

        this.setState({
            title: titleMenu,
            subtitle: <Paragraph style={{ fontSize: '14px' }}>{subtitleMenu}</Paragraph>,
            content: contentMenu,
        });
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', height: '6%', marginTop: '7px', justifyContent: 'center', flexWrap: 'wrap' }}>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer' }}
                    onPress={() => this.changeTitle("Mensagens")}>
                    <Title>Mensagens</Title>
                </View>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer' }} >
                    <Title>Online (5)</Title>
                </View>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer' }} >
                    <Title>Groups</Title>
                </View>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer' }} >
                    <Title>Calls</Title>
                </View>
            </View>
        );
    };
}