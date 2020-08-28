
import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';

export class ContentMenuMiddle extends React.Component {

    constructor(props) {
        super(props);
        this.state = { content: "Mensagens" }
    }


    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer', borderColor:'#D3D3D3',
                 borderLeftWidth:'1px', borderRightWidth:'1px', borderTopWidth:'1px', borderBottomWidth:'1px' }}>
                    <Title onPress={() => this.props.changeStateParent("ContentMessage")}>Mensagens</Title>
                </View>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer', borderColor:'#D3D3D3',
                borderLeftWidth:'1px', borderRightWidth:'1px', borderTopWidth:'1px', borderBottomWidth:'1px' }}>
                    <Title onPress={() => this.props.changeStateParent("ContentOnline")}>Online (5)</Title>
                </View>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer',  borderColor:'#D3D3D3',
                borderLeftWidth:'1px',borderRightWidth:'1px', borderTopWidth:'1px', borderBottomWidth:'1px' }}>
                    <Title onPress={() => this.props.changeStateParent("ContentGroups")} >Groups</Title>
                </View>

                <View style={{ width: '25%', alignItems: 'center', cursor: 'pointer',  borderColor:'#D3D3D3',
                borderLeftWidth:'1px', borderRightWidth:'1px', borderTopWidth:'1px', borderBottomWidth:'1px'}}>
                    <Title onPress={() => this.props.changeStateParent("ContentCalls")}>Calls</Title>
                </View >
            </View >
        );
    };
}