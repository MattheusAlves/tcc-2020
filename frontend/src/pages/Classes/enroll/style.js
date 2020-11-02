import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    teacher: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'gray',
        borderRadius: 30
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 5
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
        color: 'black',
        paddingTop: 20,
        paddingBottom: 10
    },
    pupils: {
        marginTop: 5,
        fontSize: 14,
        color: 'gray',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    price: {
        fontSize: 14,
        paddingVertical: 2,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
    },
    priceLabel: {
        fontSize: 14,
        paddingVertical: 5,
        fontWeight: 'bold',
        color: 'gray',
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
        marginTop:20
    },
    rate: {
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
        elevation: 2,
        backgroundColor: '#ffff'
    },
    textarea: {
        padding: 10,
    },
    enroll: {
        alignSelf: 'center',
        width: WIDTH - 75,
        borderRadius: 4,
        backgroundColor: "#597EFF",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 6,
        marginTop: 40,
        marginBottom: 60,
        borderWidth: 1,
        borderColor: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 12,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // elevation: 5,
        zIndex: 0,
    },
    enrollText: {
        color: '#FFFFFF',
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
    },

    hour: {
        width: (WIDTH - 42) / 2,
        borderWidth: 1,
        borderColor: 'lightgray',
        height: 43,
        borderRadius: 6,
        paddingHorizontal: 14

    }

})


export default styles