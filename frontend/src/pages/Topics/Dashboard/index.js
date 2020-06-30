import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import TouchableCollors, { styles } from './style';
import api from '../../../services/api'

function Dashboard() {
    const [disciplines, setDisciplines] = useState([{}])
    const [opacity,setOpacity] = useState()
    const columns = 3
    const latest = []
    let cont = 0

    useEffect(() => {
        async function loadData() {
            const disciplinesArray = await api.get('/disciplines/list').catch(function (error) {
                console.log(error)
            })
            if (disciplinesArray) {
                setDisciplines(disciplinesArray.data.disciplines)
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
    function _onPressButton(id,cont) {
        let value = []
        value[cont] = 0.5
        setOpacity(value)
            
        console.log(opacity)
        // console.log(opacity[cont])
    }
    function pickColor(latest) {
        if (latest[latest.length - 1] === latest[latest.length - 2] ||
            latest[latest.length - 1] === latest[latest.length - 3] ||
            latest[latest.length - 1] === latest[latest.length - 4] ||
            latest[latest.length - 1] === latest[latest.length - 5]) {
            latest.push(TouchableCollors())
            pickColor(latest)
        }
        return latest[latest.length - 1]
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                {disciplines.length > 1 ?
                    <FlatList
                        data={createRows(disciplines, columns)}
                        keyExtractor={(item) => (item._id)}
                        numColumns={columns}
                        renderItem={({ item }) => {
                            if (item.empty) return <View style={[styles.item, styles.itemEmpty]} />
                            latest.push(TouchableCollors())
                            item.num = cont
                            cont++
                            return (
                                <TouchableOpacity
                                    onPress={() => _onPressButton(item._id,item.num)}
                                    style={[styles.item, { backgroundColor: pickColor(latest),
                                        opacity:  1 //opacity[item.num]
                                    }]}
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
