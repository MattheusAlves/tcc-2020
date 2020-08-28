import React from 'react';
import { View } from 'react-native';
import { List, Divider } from 'react-native-paper';

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
                <Divider />

                <List.Item
                    title="Stepahny Fernando"
                    description="Ola, tudo bem?"
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/phone-hangup.png')}
                        style={{ height: '10px' }} />}
                />
                <Divider />

                <List.Item
                    title="Stepahny Fernando"
                    description="Ola, tudo bem?"
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/phone-plus.png')}
                        style={{ height: '10px' }} />}
                />
                <Divider />

                <List.Item
                    title="Stepahny Fernando"
                    description="Ola, tudo bem?"
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/phone.png')}
                        style={{ height: '10px' }} />}
                />
                <Divider />

                <List.Item
                    title="Stepahny Fernando"
                    description="Ola, tudo bem?"
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/phone-hangup.png')}
                        style={{ height: '10px' }} />}
                />
                <Divider />
            </View>
        );
    };
}