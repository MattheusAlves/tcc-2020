import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, StatusBar, Dimensions, TextInput } from 'react-native'

import Autocomplete from 'react-native-autocomplete-input'
import { Divider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
import api from '../services/api'

const AutoCompInput = (props) => {
    const [query, setQuery] = useState('')
    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState()
    let typingTimer

    useEffect(() => {
        function getDisciplines() {
            if (query.length >= 3) {
                api.get('/search/disciplines', {
                    params: {
                        value: query
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
            console.log("chamou get disciplines")
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
                            <TextInput style={styles.input} placeholder="Pesquisar"
                            placeholderTextColor='white'
                                underlineColorAndroid="transparent"
                                onChangeText={text => {
                                    setInputValue(text)
                                    setQuery(text)
                                }} 
                                clearButtonMode="always"/>
                        </View>
                    )}
                    renderItem={({ item, i }) => (
                        // item.length > 1 && i &&(
                            <>
                        <TouchableOpacity
                            key={item._id}
                            style={styles.touchable}
                             onPress={() => {
                                props.addCategory(item)
                                setInputValue()
                                setQuery('')
                                console.log(query)
                                console.log(data)
                                console.log("entrou render item")
                            }}>
                            <Text style={{ fontSize:18,fontWeight: '700',textTransform:'capitalize',textAlignVertical:'center',textDecorationLine:'none'
                         }}> {item.disciplineName}</Text>
                        </TouchableOpacity>
                        {/* <Divider color='blue'/> */}
                        </>
                    )}
                    
                ></Autocomplete>

            </View >    
        </>
    )
}
const styles = StyleSheet.create({
    input: {
        // borderRadius: 7, 
        width: (Dimensions.get('window').width),
        // fontWeight: '500',
        fontSize: 23,
        color: '#f5fcff',
        marginLeft: 5,
        padding: 10,
        textDecorationLine: 'none',
        textDecorationStyle: 'solid',
        backgroundColor: 'rgba(59,89,152,.2)',
        zIndex:1
    },
    autocompleteContainer: {
        flexDirection: 'row',
        alignItems: "center",
        position: 'absolute',
        width: (Dimensions.get('window').width),
        borderWidth: 0,
        zIndex: 10

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(59,89,152,1)',
        borderWidth: 0,
        borderRadius: 0,
        paddingLeft: 5,
        zIndex:10
    },
    touchable: {
        flex: 1,
        left: 0,
        right: 0,
        padding: 5,
        borderWidth:0,
        // borderBottomWidth: .5,
        borderColor: 'blue',
        
    },
    touchable2:{
        borderWidth:0,
        borderBottomWidth:0 
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