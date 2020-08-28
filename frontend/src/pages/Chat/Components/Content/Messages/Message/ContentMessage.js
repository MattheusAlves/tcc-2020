import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';
import { ContactProfile01, ContactProfile02 } from '../Contacts/Contact';
import { GroupOne, GroupTwo, GroupThree, GroupFour, GroupFive } from '../Online/Onlines';

export class ContentMessage extends React.Component {

    render() {
        return (

            <View>
                <GroupOne />
                <Divider />

                <ContactProfile01 />
                <Divider />

                <GroupTwo />
                <Divider />

                <ContactProfile02 />
                <Divider />

                <GroupThree />
                <Divider />

                <ContactProfile01 />
                <Divider />

                <GroupFour />
                <Divider />

                <ContactProfile02 />
                <Divider />

                <GroupFive />
                <Divider />
            </View>
        );
    };
}