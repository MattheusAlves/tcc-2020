import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: '#f5fcff',
    },
    chipContainer: {
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:60,   
        justifyContent:'center'
    },
    chip: {
        width: 'auto',
        justifyContent: "center",    
        fontSize:14,
    },
     topics: {
        marginTop:0
    },
    status:{
        zIndex: 10,
        elevation: 2,
        width: (Dimensions.get('window').width),
        height: 8,
        backgroundColor: '#3B5998'
    },
    // header:{
    //     justifyContent: 'center',
    //     width: (Dimensions.get('window').width),
    //     marginTop:40,
    //     marginBottom: 6,
    //     backgroundColor: 'rgba(59,89,152,1)',
    //     position:'absolute'
    // }


})

export default styles