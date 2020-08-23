import React from 'react';
import { View } from 'react-native';
import { List,Title } from 'react-native-paper';
import { ContactProfile01, ContactProfile02 } from '../Contacts/Contact';
import { GroupOne, GroupTwo, GroupThree, GroupFour, GroupFive} from './Onlines';

export class ContentOnline extends React.Component {

    render() {
        return (

            <View>
                <ContactProfile01/>
                <ContactProfile02/>
                <ContactProfile01/>
                <ContactProfile02/>
                <ContactProfile02/>
            </View>
        );
    };
}