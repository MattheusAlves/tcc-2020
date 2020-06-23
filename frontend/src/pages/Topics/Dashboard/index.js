import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import styles from './style';
import api from '../../../services/api'

async function Dashboard() {
    const [disciplines, setDisciplines] = useState([{}])

    useEffect(() => {
        async function loadData() {
           
            disciplinesArray = await api.get('/disciplines/list')
            if (disciplinesArray) {
                // console.log(disciplinesArray)
                // setDisciplines(disciplinesArray)
            }
        }
        loadData()
    }, [])
    return (
        <View>
            <TexT>Tete</TexT>
        </View>
    )
}

export default Dashboard;