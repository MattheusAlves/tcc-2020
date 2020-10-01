import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    class: {
        width: WIDTH - 40,
        height: 220,
        backgroundColor: 'rgba(138,171,255,1)',
        marginTop: 10,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 8,
        // borderWidth:1,
        borderColor:'gray',
        borderWidth:1,
        borderColor:'gray'
    },
    content: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    profile: {
        width: 161,
        height: 140,
        backgroundColor: 'white',
        borderRadius: 6,
        paddingVertical: 2,
        paddingHorizontal: 4
    },
    avatar: {
        backgroundColor: 'rgba(138,171,255,1)',
        fontWeight: '700',
        borderWidth: 1,
        marginTop:6
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
        fontWeight: '600',
        flexWrap: 'wrap',
        marginTop: 15,
    },
    distance: {
        fontSize: 14,
        marginTop: 20,
    },
    classEnrollmentContainer: {
        height:40,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 134,
        borderWidth: 1,
        marginTop:20,
        borderRadius:4,
        backgroundColor:'white'
    },
    classEnrollment: {
        textAlign:'center',
        // fontSize:14
    }


});

export default styles