import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { ContactProfile01, ContactProfile02 } from '../Contacts/Contact';

export class ContentMessage extends React.Component {

    render() {
        return (

            <View>
                <ContactProfile02 />
                <ContactProfile01 />

                <ContactProfile02 />
                <ContactProfile01 />

                <ContactProfile02 />
                <ContactProfile01 />

                <ContactProfile02 />
                <ContactProfile01 />
            </View>
        );
    };
}