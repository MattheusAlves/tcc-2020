import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
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