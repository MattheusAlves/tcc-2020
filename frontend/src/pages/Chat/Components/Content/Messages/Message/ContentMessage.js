import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { ContactProfile01, ContactProfile02 } from '../Contacts/Contact';
import { GroupOne, GroupTwo, GroupThree, GroupFour, GroupFive} from '../Online/Onlines';

export class ContentMessage extends React.Component {

    render() {
        return (

            <View>
                <GroupOne />
                <ContactProfile01 />

                <GroupTwo />
                <ContactProfile02 />

                <GroupThree />
                <ContactProfile01 />

                <GroupFour />
                <ContactProfile02 />

                <GroupFive/>
            </View>
        );
    };
}