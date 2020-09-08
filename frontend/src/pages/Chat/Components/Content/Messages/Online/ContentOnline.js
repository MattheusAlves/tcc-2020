import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';
import ContactProfile01, {ContactProfile02 } from '../Contacts/Contact';

export class ContentOnline extends React.Component {

    render() {
        return (

            <View>
                <ContactProfile01/>
                <Divider />

                <ContactProfile02/>
                <Divider />

                <ContactProfile01/>
                <Divider />

                <ContactProfile02/>
                <Divider />

                <ContactProfile02/>
                <Divider />
            </View>
        );
    };
}