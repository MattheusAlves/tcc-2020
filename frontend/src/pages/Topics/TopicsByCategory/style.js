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
        zIndex:2,
        marginTop:0,
        },

    contentTop: {
        flexDirection: 'row',
        top: -70,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    svgContainer:{
        top:0,
        marginTop:0,
        justifyContent:'flex-start'
    },
  
    buttonNew: {
        margin: 8,
        justifyContent: "center",
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 3
    },
    body: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        top: 90,
    },
    bodyContent: {
    },
    topic: {
        width: DEVICE_WIDTH - 10,
        // borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    userInformation: {
        flexDirection: 'row',
        padding: 5
    },
    username: {
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 10,
        textAlignVertical: "bottom"
    },
    title: {
        marginLeft: 45,
        fontSize: 16,
        fontWeight: '600',
    },
    topicPreview: {
        marginLeft: 45,
        fontSize: 14
    },
    topicInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        marginTop: 5,
        padding: 3
    },
    like: {
        paddingHorizontal: 8
    },
    categoryContainer:{
        width:200,
        alignSelf:'center',
        backgroundColor:'rgba(51, 102, 255,1)',
        alignItems:'center',
        fontWeight:'600',
        borderRadius:3
    },
    categoryName:{
        fontSize:22,
        color:'white'
        
    }

})

export default styles