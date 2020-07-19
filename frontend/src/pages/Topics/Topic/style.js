import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chipContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-start",
        margin: 5
    },
    chip: {
        width: 'auto',
        justifyContent: "center"

    },
    buttonIcon: {
        padding: 0,
        margin: 0
    },
    searchbar: {
        // marginTop: 20,
        margin: 3,
    },
    searchInputContainer:{
        alignSelf:'center',
        flexDirection:'row'
    },
    topics: {
        top:60
    }


})

export default styles