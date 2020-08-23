
import React from 'react';
import { View, Button } from 'react-native';
import { Title } from 'react-native-paper';
import { ContentMenuContact } from './ContentMenuContacts';

export class ContentMenuMiddle extends React.Component {

    constructor(props) {
        super(props);
        this.state = { content: "Mensagens" }
        this.changeTitle = this.changeTitle.bind(this)
    }

    changeTitle = (content) => {


        if (content == "Mensagens")
            content == "ContentMessage";
        else if (content == "Online")
            content == "ContentOnline";
        else if (content == "Groups")
            content == "ContentGroups";
        else if (content == "Conta")
            content == "ContentCalls";

        this.setState({
            title: titleMenu,
            subtitle: <Paragraph style={{ fontSize: '14px' }}>{subtitleMenu}</Paragraph>,
            content: contentMenu,
        });
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', height: '6%', marginTop: '7px', justifyContent: 'center', flexWrap: 'wrap' }}>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer' }}>
                    <Title onPress={() => this.props.changeStateParent("ContentMessage")}>Mensagens</Title>
                </View>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer' }}>
                    <Title onPress={() => this.props.changeStateParent("ContentOnline")}>Online (5)</Title>
                </View>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer' }}>
                    <Title  onPress={() => this.props.changeStateParent("ContentGroups")} >Groups</Title>
                </View>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer' }}>
                    <Title  onPress={() => this.props.changeStateParent("ContentCalls")}>Calls</Title>
                </View >
            </View >
        );
    };
}