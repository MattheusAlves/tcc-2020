import { StyleSheet, Dimensions } from 'react-native'
import common from '../../commonStyles'

const WIDTH = Dimensions.get('screen').width



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#3D7AFD'
    },
    userInformation: {
        marginHorizontal: 6,
        borderWidth: 1,
        paddingHorizontal: 2,
        paddingVertical: 4,
        borderColor: '#E6E9F2',
        borderRadius: 4,
        backgroundColor: '#FAFAFA'
    },
    socialMedia: {
        flexDirection: "row",
        alignItems: "center",
        // borderWidth:1,
        padding: 3
    },
    linkSocialMedia: {
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 10,
        alignSelf: 'flex-end'
    },
    buttonSocialMedia: {
        flexDirection: 'row',
        alignItems: "center",

    },
    divider: {
        borderColor: "lightgray",
        borderWidth: .7,

    },
    teacherInformation: {
        // marginHorizontal:6,
        // borderWidth:1,
        paddingHorizontal: 2,
        paddingVertical: 4,
        borderColor: '#E6E9F2',
        borderRadius: 4,
        backgroundColor: '#FAFAFA',
        borderColor: '#0099FF'
    },
    containerBio: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 6,
        paddingHorizontal: 2,
        paddingVertical:10,
        borderWidth:1,
        borderColor: 'lightgray',
        borderRadius:6,
        alignItems:'center',
        justifyContent: 'center',
    },
    teacherBio: {
        width: WIDTH - 75,
        textAlign: "justify",
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
        textAlign: 'center',
    },
    quoteLeft: {
        // top: 0,
        // alignSelf: 'flex-start',
        paddingHorizontal: 2
    },
    quoteRight: {
        // alignSelf: 'flex-end',
    },
    classes: {
        marginHorizontal: 6,
        alignItems: 'center',
        justifyContent: 'center',

    },
    class: {
        flex: 1,
        marginTop: 2,
        borderWidth: 1,
        height: 200,
        width: WIDTH - 11,
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginRight: 2,
        borderRadius: 8,

    },
    classTitle: {
        fontSize: 24,
        color: 'white',
        fontWeight: '700'
    },
    classPrice: {
        top: 45,
        fontSize: 17,
        color: 'white',
        fontWeight: '600'
    },
    rank: {
        top: 60,
        alignSelf: 'flex-end',
        color: 'white',
        fontSize: 16
    },
    svg: {
        alignSelf: 'flex-end',
        right: 10,
        position: 'absolute'
    },
    teacherChat: {
        marginVertical: 5,
        alignSelf: "center",
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: '#285BC8',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    teacherChatTxt: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    }
})

export default styles