import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TextInput, List } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';

import { style } from './style'
import api from '../../../services/api'

const Users = () => {
    const [users, setUser] = useState('')
    useEffect(() => {

    }, [])
    return (
        <SafeAreaView>
            <TextInput
                label="Pesquisar"
                mode="outlined"
            />
            <View>
                <Text>Usuários por perto</Text>
                <List.Item
                    title="first Item"
                    description="item description"
                    left={props => <List.Icon {...props} icon="folder" />}
                //utlizar Avatar.Image e colocar imagem do usuário
                />
            </View>


        </SafeAreaView>
    )
}

export default Users;