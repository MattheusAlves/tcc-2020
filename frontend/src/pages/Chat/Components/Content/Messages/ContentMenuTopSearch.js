import React from 'react';
import { View } from 'react-native';
import {Searchbar, Avatar } from 'react-native-paper';


export class ContentMenuTopSearch extends React.Component {

    render() {
        return (
            <View style={{ flexDirection: 'row', height: '9%', justifyContent: 'center', flexWrap: 'wrap' }}>

                <View style={{ width: '20%' }}>
                    <Avatar.Image style={{
                        marginLeft: '30%', marginTop: '2%', marginBottom: '2%',
                        cursor: 'pointer'
                    }} size={60} source={require('../../../../../assets/images/profile01.jpg')} />
                </View>

                <View style={{ width: '50%' }}>
                    <Searchbar placeholder="Search" style={{
                        width: '50%', height: '60%', marginTop: '7px',
                        fontSize: 12, borderRadius: '30px', backgroundColor: '#DCDCDC'
                    }} />
                </View>

            </View>
        );
    };
}