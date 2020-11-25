import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, TextInput } from 'react-native'

import Autocomplete from 'react-native-autocomplete-input'
import Icon from 'react-native-vector-icons/FontAwesome'
import api from '../services/api'

const AutoCompInput = (props) => {
    const [query, setQuery] = useState('')
    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState()

    useEffect(() => {
        function getDisciplines() {
            if (query && query.length >= 3) {
                api.get('/search/disciplines', {
                    params: {
                        disciplineName: query
                    }
                }).then((response) => {
                    if (response.data.length >= 1) {
                        response.data.map((discipline) => {
                            console.log("setou value")
                            setData(oldValue => [...oldValue, { disciplineName: discipline.disciplineName, id: discipline._id }])
                        })
                    }
                })
            }
        }

        const timeout = setTimeout(() => {
            setData([])
            getDisciplines()

        }, 300)

        return () => clearTimeout(timeout)
    }, [query])


    return (
        <>
            <View style={styles.autocompleteContainer}>
                <Autocomplete
                    data={data}
                    defaultQuery={query}
                    style={styles.input}
                    value={inputValue}
                    listStyle={styles.touchable2}
                    listContainerStyle={styles.touchableContainer}
                    inputContainerStyle={styles.inputContainer}
                    renderTextInput={() => (
                        <View style={styles.inputContainer}>
                            <TouchableOpacity>
                                <Icon name='search' size={24} color='white' /></TouchableOpacity>
                            <TextInput style={styles.input} placeholder="Pesquisar disciplina"
                                placeholderTextColor='white'
                                underlineColorAndroid="transparent"
                                onChangeText={text => {
                                    setInputValue(text)
                                    setQuery(text)
                                }}
                                clearButtonMode="always" />
                        </View>
                    )}
                    renderItem={({ item, i }) => (
                        <>
                            <TouchableOpacity
                                key={item._id}
                                style={styles.touchable}
                                onPress={() => {
                                    props.addCategory(item)
                                    setInputValue()
                                    setQuery('')

                                }}>
                                <Text style={{
                                    fontSize: 18, fontWeight: '700', textTransform: 'capitalize', textAlignVertical: 'center', textDecorationLine: 'none'
                                }}> {item.disciplineName}</Text>
                            </TouchableOpacity>
                            <View style={{width:'100%',height:.7,backgroundColor:'lightgray'}} c/>
                            
                        </>
                    )}
                >
                </Autocomplete>

            </View >
        </>
    )
}
const styles = StyleSheet.create({
    input: {
        width: (Dimensions.get('window').width),
        fontSize: 23,
        marginLeft: 5,
        padding: 10,
        color: 'white',
        textDecorationLine: 'none',
        textDecorationStyle: 'solid',
        backgroundColor: 'rgba(59,89,152,.2)',
        // zIndex: 1
    },
    autocompleteContainer: {
        flexDirection: 'row',
        alignItems: "center",
        // position: 'absolute',
        width: (Dimensions.get('window').width),
        borderWidth: 0,
        zIndex: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.80,

        elevation: 3,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(59,89,152,1)',
        borderWidth: 0,
        borderRadius: 0,
        paddingLeft: 5,
        zIndex: 10
    },
    touchable: {
        flex: 1,
        left: 0,
        right: 0,
        padding: 5,
        borderWidth: 0,
        borderColor: 'blue',

    },
    touchable2: {
        borderWidth: 0,
        borderBottomWidth: 0
    },
    touchableContainer: {
        marginRight: 3,
        marginLeft: 3,
        borderWidth: 0,
        backgroundColor: 'white',
        borderRadius: 4,
        zIndex: 0,
    },

});


export default AutoCompInput;