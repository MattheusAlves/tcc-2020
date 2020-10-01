import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';



const SearchHeader = () => {
    return (
        <View style={styles.container}>
            <TextInput maxlength={50} style={styles.searchInput}
                placeholder="Pesquisar" returnKeyType='search' onSubmitEditing={() => console.log('enviou')}>
            </TextInput>
            <TouchableOpacity style={styles.iconSearch} >
                <Icon name="search1" size={30} />
            </TouchableOpacity>
        </View >
    )
}

export default SearchHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(138,171,255,1)',
        height: 87,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInput: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: '#605756',
        width: '80%',
        height: 46,
        backgroundColor: 'white',
        borderRadius: 6,
        fontSize: 18,
        paddingHorizontal: 8,
    },
    iconSearch: {
        position: 'absolute',
        flexDirection: "row",
        right: 40,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        borderLeftWidth: 1,
    }
})