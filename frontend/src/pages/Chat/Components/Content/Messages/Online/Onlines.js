import React from 'react';
import { View } from 'react-native';
import { List, Title } from 'react-native-paper';
import { ContactProfile01, ContactProfile02 } from '../Contacts/Contact';

export class GroupOne extends React.Component {

    render() {
        return (
            <View>
                <List.Item
                    title="Grupo da Família"
                    description="hahahaha"
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/profile01.jpg')}
                        style={{ height: '10px' }} />}
                />
            </View>
        );
    };
}

export class GroupTwo extends React.Component {

    render() {
        return (
            <View>
                <List.Item
                    title="Grupo do Trabalho"
                    description="É verdade."
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/profile01.jpg')}
                        style={{ height: '10px' }} />}
                />
            </View>
        );
    };
}

export class GroupThree extends React.Component {

    render() {
        return (

            <View>
                <List.Item
                    title="Grupo da Faculdade"
                    description="Até mais"
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/profile01.jpg')}
                        style={{ height: '10px' }} />}
                />
            </View>
        );
    };
}

export class GroupFour extends React.Component {

    render() {
        return (

            <View>
                <List.Item
                    title="Grupo da Zueira"
                    description="Boa Noite"
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/profile01.jpg')}
                        style={{ height: '10px' }} />}
                />
            </View>
        );
    };
}

export class GroupFive extends React.Component {

    render() {
        return (

            <View>
                <List.Item
                    title="Grupo do Esporte"
                    description="Bom diaa"
                    style={{ cursor: 'pointer' }}
                    left={props => <List.Icon icon={require('../../../../../../assets/images/profile01.jpg')}
                        style={{ height: '10px' }} />}
                />
            </View>
        );
    };
}