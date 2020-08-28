import React from 'react';
import { View } from 'react-native';
import {Divider } from 'react-native-paper';
import { GroupOne, GroupTwo, GroupThree, GroupFour, GroupFive} from './AllGroups';

export class ContentGroups extends React.Component {

    render() {
        return (

            <View>
                <GroupOne/>
                <Divider />
                <GroupTwo/>
                <Divider />
                <GroupThree/>
                <Divider />
                <GroupFour/>
                <Divider />
                <GroupFive/>
                <Divider />
            </View>
        );
    };
}