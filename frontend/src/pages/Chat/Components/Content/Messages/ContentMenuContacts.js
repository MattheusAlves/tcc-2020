import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';
import { ContentMessage } from './Message/ContentMessage';
import { ContentOnline } from './Online/ContentOnline';
import { ContentGroups } from './Groups/ContentGroups';
import { ContentCalls } from './Calls/ContentCalls';
import { ContentMenuMiddle } from './ContentMenuMiddle';

export class ContentMenuContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = { content: <ContentMessage /> }
        this.changeState = this.changeState.bind(this)
    }

    changeState(contentMenu) {

        if (contentMenu == "ContentMessage")
            contentMenu = <ContentMessage />
        else if (contentMenu == "ContentOnline")
            contentMenu = <ContentOnline />
        else if (contentMenu == "ContentGroups")
            contentMenu = <ContentGroups />
        else if (contentMenu == "ContentCalls")
            contentMenu = <ContentCalls />

        this.setState({
            content: contentMenu
        })
    }

    render() {
        return (
            <View>
                <ContentMenuMiddle changeStateParent={this.changeState.bind(this)} />
                <Divider/>
                {this.state.content}
            </View>
        );
    };
}






