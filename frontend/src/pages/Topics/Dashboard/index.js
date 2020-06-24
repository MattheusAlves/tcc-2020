import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './style';
import api from '../../../services/api'

function Dashboard() {
    const [disciplines, setDisciplines] = useState([{}])
    const columns = 3
    useEffect(() => {
        async function loadData() {
            const disciplinesArray = await api.get('/disciplines/list').catch(function (error) {
                console.log(error)
            })

            if (disciplinesArray) {
                setDisciplines(disciplinesArray.data.disciplines)
                console.log(disciplines)
            }
        }

        loadData()

    }, [])
    function createRows(data, columns) {
        const rows = Math.floor(data.length / columns); // [A]
        let lastRowElements = data.length - rows * columns; // [B] 
        while (lastRowElements !== columns) { // [C]
            data.push({ // [D]
                id: `empty-${lastRowElements}`,
                name: `empty-${lastRowElements}`,
                empty: true
            });
            lastRowElements += 1; // [E]
        } return data; // [F]
    }
    function _onPressButton(){
        
    }
    return (
        <SafeAreaView>
            <View>
                {disciplines.length > 1 ?
                    <FlatList
                        data={createRows(disciplines, columns)}
                        keyExtractor={(item) => (item._id)}
                        numColumns={columns}
                        renderItem={({ item }) => {
                            if (item.empty) return <View style={[styles.item, styles.itemEmpty]} />
                            return (
                                <TouchableOpacity
                                 underlayColor="white"
                                    onPress={_onPressButton}
                                    style={styles.item}
                                    key={() => Math.floor(Math.random() * 5)}>
                                    <Text style={styles.text}
                                        key={() => Math.floor(Math.random() * 5)}>
                                        {item.disciplineName}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }} /> : <Text>Network error</Text>}
            </View>
        </SafeAreaView>

    )
}

export default Dashboard;