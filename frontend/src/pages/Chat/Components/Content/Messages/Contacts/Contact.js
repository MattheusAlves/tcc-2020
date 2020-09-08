import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';


export default function ContactProfile01({ navigation }) {

    return (
        <View>
            <List.Item
                title="Stepahny Fernando"
                description="Ola, tudo bem?"
                style={{ cursor: 'pointer' }}
                left={props => <List.Icon icon={require('../../../../../../assets/images/profile01.jpg')}
                    style={{ height: '10px' }} />}
                onPress={() => navigation.push("ContactProfile02")}
            />
        </View>
    );
}

export class ContactProfile02 extends React.Component {

    render() {
        return (
            <View>
                <List.Item
                    title="Stepahny Fernando"
                    description="Ola, tudo bem?"
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/profile02.jpg')}
                        style={{ height: '10px' }} />}
                />
            </View>
        );
    };
}