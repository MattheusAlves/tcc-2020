import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign';
import IconDistance from 'react-native-vector-icons/MaterialCommunityIcons'
import Autocomplete from 'react-native-autocomplete-input'
import api from '../services/api'

const SearchHeader = (props) => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    const sleepSearch = useRef(200).current

    useEffect(() => {
        const timer = setTimeout(() => {
            async function getDiscipline() {
                api.get('/search/disciplines', {
                    params: {
                        disciplineName: search
                    }
                }).then((result) => {
                    console.log(result.data)
                    setData(result.data)
                }).catch((err) => console.log(err))
            }
            if (search === '' & data != []) {
                setData([])
            } else {
                getDiscipline()
            }
        }, sleepSearch)
        return () => clearTimeout(timer)
    }, [search])


    return (
        <View style={styles.container}>
            {/* <TextInput maxlength={50} style={styles.searchInput}
                name="search"
                placeholder="Pesquisar" returnKeyType='search'
                onSubmitEditing={(e) => props.search(e.nativeEvent.text)}
                onChangeText={(text) => setSearch(text)}
            >
            </TextInput> */}

            <Autocomplete
                data={data}
                defaultValue={search}
                // onChangeText={text => setSearch(text)}
                containerStyle={{ overflow: "visible" }}
                inputContainerStyle={styles.searchInputContainer}
                listContainerStyle={styles.listContainer}
                listStyle={styles.list}
                style={styles.searchInput}
                renderSeparator={() => <View style={styles.separator}></View>}
                renderTextInput={() => (
                    <TextInput maxlength={50} style={styles.searchInput}
                        name="search"
                        placeholder="Pesquisar"
                        returnKeyType='search'
                        // onSubmitEditing={(e) => props.search(e.nativeEvent.text)}
                        onChangeText={(text) => setSearch(text)}
                        autoCorrect={false}
                        numberOfLines={1}
                        autoCompleteType='off'
                    />
                )}
                keyExtractor={(item) => item._id}
                renderItem={({ item, index }) => (
                    <View style={{ zIndex: 10 }}>
                        <TouchableOpacity onPress={() => {
                            setData([])
                            props.search(item._id)
                        }} style={styles.disciplineTouchable}>
                            <View style={styles.separator}></View>
                            <Text style={styles.disciplineItem}>{item.disciplineName}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.iconSearch} onPress={() => {
                Keyboard.dismiss()
                props.search(search)
            }}>
                <Icon name="search1" size={30}  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.distance} onPress={() => props.setModalVisibility(true)}>
                <IconDistance name='map-marker-distance' size={35} color="#597EFF" />
            </TouchableOpacity>
        </View >
    )
}

export default SearchHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3D7AFD',
        height: 87,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        overflow: "visible",
        zIndex: 1
    },
    searchInput: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: '#605756',
        width: '90%',
        height: 46,
        fontSize: 20,
        textDecorationLine: "none",
        backgroundColor: 'white',
        borderRadius: 6,
        paddingHorizontal: 8,
        alignSelf: "center",
        zIndex: 10
    },
    searchInputContainer: {
        borderWidth: 0,
    },
    iconSearch: {
        position: 'absolute',
        flexDirection: "row",
        right: Dimensions.get('window').width / 5,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        borderLeftWidth: 1,
        backgroundColor: 'white',
    },
    listContainer: {
        zIndex: 4,
        position: 'absolute',
        width: '95%',
        top: 46,
        alignSelf: 'center',

    },
    list: {
        zIndex: 2,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 5
    },
    disciplineItem: {
        fontSize: 16
    },
    disciplineTouchable: {
    },
    separator: {
        flex: 1,
        borderWidth: .5,
        marginVertical: 3,
        borderColor: '#cccc',
    },
    distance: {
        marginLeft: 3,
        right: 10,
        width: 46,
        backgroundColor: 'white',
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#605756',

    }
})