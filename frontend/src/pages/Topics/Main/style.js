import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    header:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    newTopicWrapper: {
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:'#285BC8',
        borderRadius:4,
        elevation:2,
        marginVertical:4
    },
    newTopic: {
        color:'white',
        fontWeight:'bold'
    },
    containerLoading:{
        flex:1,
        flexDirection:'row',
        width: (Dimensions.get('window').width),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white'
    },
    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop:5,
        marginBottom:10,
        width:Dimensions.get('screen').width /2,
        justifyContent: 'center',
    },
    chip: {
        width: 'auto',
        justifyContent: "center",
        fontSize: 14,
        elevation:3,
        marginHorizontal:2,
    },
    topics: {
        marginTop: 0
    },
    status: {
        zIndex: 10,
        elevation: 2,
        width: (Dimensions.get('window').width),
        height: 5,
        backgroundColor: '#3B5998'
    },
 
    scrollView:{    

     }
})


export default styles