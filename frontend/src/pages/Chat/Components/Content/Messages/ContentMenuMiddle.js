import React from 'react';
import { View, Alert } from 'react-native';
import { Title, Button } from 'react-native-paper';
import { ContentMenuContact } from './ContentMenuContacts';


export class ContentMenuMiddle extends React.Component {

    constructor(props) {
        super(props);
        this.state = { content: "Perfil" }
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', height: '6%', marginTop: '7px', justifyContent: 'center', flexWrap: 'wrap' }}>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer' }}>
                    <Button onPress={() => this.props.changeStateParent("ContentMessage")} >Mensagens</Button>
                </View>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer' }}>
                    <Button onPress={() => this.props.changeStateParent("ContentOnline")}>Online (5)</Button>
                </View>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer' }} >
                    <Button onPress={() => this.props.changeStateParent("ContentGroups")}>Groups</Button>
                </View>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer' }} >
                    <Button onPress={() => this.props.changeStateParent("ContentCalls")}>Calls</Button>
                </View>
            </View>
        );
    };
}