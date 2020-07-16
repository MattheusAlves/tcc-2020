import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Autocomplete from 'react-native-autocomplete-input'

import api from '../services/api'

const AutoCompInput = (props) => {
    const [query, setQuery] = useState('')
    const [data, setData] = useState([])
    useEffect(() => {
        async function getDisciplines() {
            setData([])
            if (query.length >= 3) {
                api.get('/search/disciplines', {
                    params: {
                        value: query
                    }
                }).then((response) => {
                    if (response.data.length >= 1) {
                        response.data.map((discipline) => {
                            setData(oldValue => [...oldValue, discipline.disciplineName])
                        })
                    }
                })
            }
        }
        getDisciplines()
    }, [query])
    return (
        <View style={styles.autocompleteContainer}>
            <Autocomplete
                data={data}
                defaultQuery={query}
                onChangeText={text => setQuery(text)}
                renderItem={({ item, i }) => (
                    <TouchableOpacity onPress={() => setQuery(item)}>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View >
    )
}
const styles = StyleSheet.create({
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
        backgroundColor: 'white',
        borderRadius: 7
    }
});


export default AutoCompInput;