import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Divider, List, Drawer } from 'react-native-paper'

import api from '../services/api'
const Topics = (props) => {
    useEffect(() => {

    }, [])
    return (
        //Cada Drawer vai ser o titulo da categoria
        <View>
            <TouchableOpacity>
                <Drawer.Item
                    style={{ backgroundColor: '#64ffda' }}
                    icon="star"
                    label="First Item"
                /></TouchableOpacity>
            <Divider />
            <TouchableOpacity onPress={() => _onPressChip()}>
                <Drawer.Item
                    style={{ backgroundColor: '#64ffda' }}
                    icon="star"
                    label="First Item"
                />
            </TouchableOpacity>
        </View>
    )
}

export default Topics;

const styles = StyleSheet.create({

})