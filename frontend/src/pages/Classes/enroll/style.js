import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#285BC8'
    },
    teacher: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: 'white',
        borderRadius: 4,
        backgroundColor: 'white',
        elevation:2,
        marginHorizontal:4,
        marginVertical:5
    },
    teacherSince:{
        color:'black',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 5,
        color:'black'
    },
    classe: {
        marginLeft: 20
    },
    discipline: {
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: -20,
        textTransform: 'capitalize',
        alignSelf: 'center',
        elevation: 10,
        color: 'white',
        paddingTop: 20,
        paddingBottom: 10
    },
    pupils: {
        marginTop: 5,
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    price: {
        fontSize: 14,
        paddingVertical: 2,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
    },
    priceLabel: {
        fontSize: 14,
        paddingVertical: 5,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase'
    },
    ratings: {
        height: 72,
        borderWidth: 1,
        borderColor: 'lightgray',
        width: WIDTH - 40,
        borderRadius: 6,
        justifyContent: 'center',
        paddingHorizontal: 8,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        marginTop:20,
    },
    rate: {
        fontWeight:'bold'
    },
    form: {
        marginTop: 20,
        alignItems: "center"
    },
    textareaContainer: {
        width: WIDTH - 40,
        height: 100,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        backgroundColor: '#ffff'
    },
    textarea: {
        padding: 10,
    },
    enroll: {
        alignSelf: 'center',
        width: WIDTH - 75,
        borderRadius: 4,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 6,
        marginTop: 40,
        marginBottom: 60,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 12,
        },
        elevation:4,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        zIndex: 0,
    },
    enrollText: {
        color: '#285BC8',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    dateHourContainer: {
        width: WIDTH - 40,
        alignSelf: 'center',
        flex: 1,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    date: {
        width: (WIDTH - 42) / 2,
        // color:'gray',
        // zIndex:10,
        elevation:2,
        
    },

    hour: {
        width: (WIDTH - 42) / 2,
        borderWidth: 1,
        borderColor: 'lightgray',
        height: 44,
        borderRadius: 6,
        paddingHorizontal: 14,
        backgroundColor: 'white'

    }

})


export default styles