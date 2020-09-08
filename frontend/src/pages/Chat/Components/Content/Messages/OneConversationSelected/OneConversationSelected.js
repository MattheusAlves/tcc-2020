import React from 'react';
import { View } from 'react-native';
import { Divider, Title, Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export class OneConversationSelected extends React.Component {
    render() {
        return (
            <View>
                {/*Menu Top*/}
                <View >
                    <Title>
                        Título 01
                    </Title>
                </View>

                {/* MenuMiddle*/}
                <View style={{}}>
                    <Title>
                        Título  02
                     </Title>

                    <Button> Voltar </Button>
                </View>

                {/*Menu Bottom*/}
                <View style={{}}>
                    <Title>
                        Título  03
                    </Title>
                </View>
            </View>
        );
    }
}