import React from 'react';
import { View } from 'react-native';
import { List, Title } from 'react-native-paper';
import { ContactProfile01, ContactProfile02 } from '../Contacts/Contact';
import { GroupOne, GroupTwo, GroupThree, GroupFour, GroupFive} from './AllGroups';

export class ContentGroups extends React.Component {

    render() {
        return (

            <View>
                <GroupOne/>
                <GroupTwo/>
                <GroupThree/>
                <GroupFour/>
                <GroupFive/>
            </View>
        );
    };
}