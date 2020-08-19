import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { ContentMessage } from './Message/ContentMessage';
import { ContentOnline } from './Online/ContentOnline';
import { ContentGroups } from './Groups/ContentGroups';
import { ContentCalls } from './Calls/ContentCalls';

export class ContentMenuContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = { content: <ContentMessage /> }
    }
    
    render() {
        return (
            <View>
                {this.state.content}
            </View>
        );
    };
}






