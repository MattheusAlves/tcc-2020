import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    scrollView: {
        width: WIDTH,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding:4
    },
    class: {
        width: WIDTH - 40,
        height: 240,
        backgroundColor: 'rgb(89,126,255)',
        marginTop: 15,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 8,
        
    },
    content: {
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 10
    },
    profile: {
        width: 161,
        height: 140,
        backgroundColor: 'white',
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 10,
    },
    avatar: {
        backgroundColor: 'rgba(138,171,255,1)',
        fontWeight: '700',
        borderWidth: 1,
        marginTop: 6
    },
    teacherName: {
        fontSize: 18,
        fontWeight: '600',
    },
    classInformation: {
        width: '48%',
        overflow: 'hidden',
        paddingLeft: 10
    },
    discipline: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
        flexWrap: 'wrap',
        marginTop: 15,
    },
    distance: {
        fontSize: 14,
        marginTop: 20,
    },
    classEnrollmentContainer: {
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 134,
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 20,
        borderRadius: 4,
        backgroundColor: 'white',
        // backgroundColor: '#FFA500'
    },
    classEnrollment: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'uppercase'
    }


});

export default styles