import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';
import  ContactProfile01, {ContactProfile02 } from '../Contacts/Contact';
import  GroupOne, {GroupTwo, GroupThree, GroupFour, GroupFive } from '../Online/Onlines';
import { OneConversationSelected } from '../OneConversationSelected/OneConversationSelected';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export class ContentMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { content: "" }
        this.changeOneConversation = this.changeOneConversation.bind(this)
    }

    changeOneConversation(contentMenu) {
        if (contentMenu == "GroupOne")
            content = ""
        else if (contentMenu == "GroupTwo")
            content = ""
        else if (contentMenu == "GroupThree")
            content = ""
        else if (contentMenu == "GroupFour")
            content = ""
        else if (contentMenu == "GroupFive")
            content = ""
        else if (contentMenu == "ContactProfile01")
            content = ""
        else if (contentMenu == "ContactProfile02")
            content = ""

        this.setState({
            content: contentMenu
        })
    }


    render() {
        return (
            <View>

                <GroupOne  />
                <Divider />

                <ContactProfile01 />
                <Divider />

                <GroupTwo  />
                <Divider />

                <ContactProfile02  />
                <Divider />

                <GroupThree />
                <Divider />

                <ContactProfile01 />
                <Divider />

                <GroupFour  />
                <Divider />

                <ContactProfile02 />
                <Divider />

                <GroupFive  />
                <Divider />
            </View>
        );
    };
}