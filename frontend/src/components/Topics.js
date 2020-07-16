import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Divider, List } from 'react-native-paper'

import api from '../services/api'
const Topics = (props) => {
    useEffect(() => {

    },[])
    return (
        <List.Section title="Tópico 1">
            <List.Accordion
                title="teste1"
                left={props => <List.Icon {...props} icon="folder" />}>
                <Text style={{ flex: 1, margin: 0, padding: 0 }}>Teste</Text>
                <List.Item title="second item" />
            </List.Accordion>
        </List.Section>
    )
}

export default components;

const styles = StyleSheet.create({

})