import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';

export class ContentMenuMiddle extends React.Component {

    render() {
        return (
            <View style={{ flexDirection: 'row', height: '6%', marginTop: '7px', justifyContent: 'center', flexWrap: 'wrap' }}>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer' }} >
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