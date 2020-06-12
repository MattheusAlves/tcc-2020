import React, { useEffect, useState } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';

import api from '../../services'


const DisciplineList = () => {
    useEffect(() => {
        const disciplines = api.get('/discipline/list')
                
    }, [])
    return <View></View>
}

export default DisciplineList;