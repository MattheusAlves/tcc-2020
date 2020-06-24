import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        backgroundColor: "#99ccff",
        flexGrow: 1,
        margin: 4,
        padding: 20,
        flexBasis: 0,
        borderRadius:5
    },
    text: {
    fontSize:15,
    fontFamily:'sans-serif-medium'
    },
    itemEmpty: {
        backgroundColor: "transparent"
    },
})

export default styles