import { StyleSheet, Dimensions } from 'react-native'


const DEVICE_WIDTH = Dimensions.get('screen').width
const DEVICE_HEIGHT = Dimensions.get('screen').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)',
        zIndex: 0,
    },
    containerTop: {
        width: DEVICE_WIDTH,
        backgroundColor: 'rgb(255, 255, 255)',
        position: 'absolute',
        height: 70,
        marginTop: 0,
        zIndex: 3
    },

    contentTop: {
        flexDirection: 'row',
        top: -70,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    svgContainer: {
        top: 0,
        marginTop: 0,
        justifyContent: 'flex-start'
    },

    buttonNew: {
        margin: 8,
        justifyContent: "center",
        alignItems:'center',
        paddingHorizontal: 14,
        paddingVertical:8,
        backgroundColor: 'white',
        borderRadius: 3,
        
    },
    buttonText:{
        fontSize:18,
        fontWeight:"900",
        textAlign:'center',
        textAlignVertical:'center'
    },
    body: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 80,
    },
    topic: {
        width: DEVICE_WIDTH - 10,
    },
    topicContainer: {
        borderRadius: 8,
        borderWidth: .25,
        borderColor: '#484848',
        overflow: 'hidden',
        marginVertical:6


    },

    userInformation: {
        backgroundColor: 'rgba(0, 153, 255,.6)',
        flexDirection: 'row',
        padding: 7,
        marginBottom: 2,
    },
    username: {
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 10,
        textAlignVertical: "bottom",
        color: '#484848'
    },
    title: {
        marginLeft: 3,
        fontSize: 16,
        fontWeight: '700',
        color: '#484848'
    },
    topicPreview: {
        marginLeft: 3,
        fontSize: 14
    },
    topicInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginTop: 5,
        padding: 1,
        borderTopWidth: .5,
        borderColor: 'rgba(0, 153, 255,.6)',
    },
    info: {
        paddingHorizontal: 8,
        textAlign: 'center',
        fontWeight: '600',
        color: '#484848',
        fontSize: 15
    },

    categoryContainer: {
        width: 200,
        alignSelf: 'center',
        backgroundColor: 'rgba(51, 102, 255,1)',
        alignItems: 'center',
        fontWeight: '600',
        borderRadius: 3,
       
    },
    categoryName: {
        fontSize: 22,
        color: 'white'

    },


})

export default styles