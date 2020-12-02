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
        padding: 4
    },
    class: {
        width: WIDTH - 40,
        height: 260,
        backgroundColor: '#285BC8',
        marginTop: 15,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 8,
        elevation:14
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
        backgroundColor: '#3D7AFD',
        fontWeight: '700',
        borderWidth: 1,
        borderColor: '#285BC8',
        marginTop: 6
    },
    teacherName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    classInformation: {
        width: '48%',
        overflow: 'hidden',
        paddingLeft: 10
    },
    disciplines: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign:'center',
        textTransform:'uppercase',
        color:'white'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        color:'white'
    },
    distance: {
        fontSize: 16,
        marginTop: 20,
        color:'white'
    },
    classEnrollmentContainer: {
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 134,
        marginTop: 10,
        borderRadius: 4,
        backgroundColor: 'white',
        elevation:2
    },
    classEnrollment: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color:'black'
    },
    customLabelSlider: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ffff',
        alignItems: "center",
        justifyContent: 'center'

    },
    labelMaxDistance: {
        fontSize: 20,
        color: '#fff',
        fontWeight:'bold',
        marginBottom:35,
        textDecorationColor:'#000',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 2, height: 1},
        textShadowRadius: 10,
        textDecorationStyle:"dashed",
        textTransform:"uppercase"
    },
    meters:{
        textTransform:'lowercase'
    }


});

export default styles