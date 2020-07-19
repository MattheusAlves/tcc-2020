import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Autocomplete from 'react-native-autocomplete-input'

import api from '../services/api'

const AutoCompInput = (props) => {
    const [query, setQuery] = useState('')
    const [data, setData] = useState([])
    let typingTimer
    const timeout = 600

    useEffect(() => {
        async function getDisciplines() {

            if (query.length >= 3) {
                await api.get('/search/disciplines', {
                    params: {
                        value: query
                    }
                }).then((response) => {
                    if (response.data.length >= 1) {
                        response.data.map((discipline) => {
                            setData(oldValue => [...oldValue, { disciplineName: discipline.disciplineName, id: discipline._id }])
                        })
                    }
                })
            }
        }

        getDisciplines()

    }, [query])
    function controlTime(text) {
        clearTimeout(typingTimer)
        typingTimer = setTimeout(() => {
            setData([])
            setQuery(text)
        }, timeout);
    }

    return (
        <View style={styles.autocompleteContainer}>
            <Autocomplete
                data={data}
                placeholder="Adicionar categorias"
                defaultQuery={query}
                listStyle={styles.touchable}
                listContainerStyle={styles.touchableContainer}
                inputContainerStyle={styles.inputContainer}
                onChangeText={text => controlTime(text)}
                renderItem={({ item, i }) => (
                    // item.length > 1 && i &&(
                    <TouchableOpacity
                        key={item._id}
                        style={styles.touchable}
                        onPress={() => props.addCategory(item)}>
                        <Text style={{ fontWeight: 'bold' }}> {item.disciplineName}</Text>
                    </TouchableOpacity>
                )}
            />
        </View >
    )
}
const styles = StyleSheet.create({
    autocompleteContainer: {
        flex: 1,
        left: 10,
        position: 'absolute',
        right: 10,
        zIndex: 1,
        backgroundColor: 'white',
    },
    inputContainer: {
        borderWidth: 0.7,
        borderRadius: 4,
        zIndex: 1,

    },
    touchable: {
        flex: 1,
        left: 0,
        right: 0,
        marginTop: 5,
        padding: 0,
        borderWidth: 0,
        borderColor: '#fff',
    },
    touchableContainer: {
        marginRight: 3,
        marginLeft: 3,
        borderTopWidth: 0,
        backgroundColor: 'white',
        borderRadius: 4,
        zIndex: 2,
    }
});


export default AutoCompInput;