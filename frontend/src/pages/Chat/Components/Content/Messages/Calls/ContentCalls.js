import React from 'react';
import { View } from 'react-native';
import { List, Title } from 'react-native-paper';
import { ContactProfile01, ContactProfile02 } from '../Contacts/Contact';

export class ContentCalls extends React.Component {

    render() {
        return (

            <View>
                <List.Item
                    title="Stepahny Fernando"
                    description="Ola, tudo bem?"
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/phone.png')}
                        style={{ height: '10px' }} />}
                />

                <List.Item
                    title="Stepahny Fernando"
                    description="Ola, tudo bem?"
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/phone-hangup.png')}
                        style={{ height: '10px' }} />}
                />

                <List.Item
                    title="Stepahny Fernando"
                    description="Ola, tudo bem?"
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/phone-plus.png')}
                        style={{ height: '10px' }} />}
                />

                <List.Item
                    title="Stepahny Fernando"
                    description="Ola, tudo bem?"
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/phone.png')}
                        style={{ height: '10px' }} />}
                />

                <List.Item
                    title="Stepahny Fernando"
                    description="Ola, tudo bem?"
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/phone-hangup.png')}
                        style={{ height: '10px' }} />}
                />
            </View>
        );
    };
}