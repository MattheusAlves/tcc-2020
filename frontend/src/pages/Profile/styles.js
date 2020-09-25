import { StyleSheet, Dimensions } from 'react-native'
import common from '../../commonStyles'

const WIDTH = Dimensions.get('screen').width



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInformation:{
        marginHorizontal:6,
        borderWidth:1,
        paddingHorizontal:2,
        paddingVertical:4,
        borderColor:'#E6E9F2',
        borderRadius:4,
        backgroundColor:'#FAFAFA'
    },
    socialMedia:{
        flexDirection:"row",
        alignItems:"center",
        // borderWidth:1,
        padding:3
    },
    linkSocialMedia:{
        fontSize:18,
        fontWeight:'400',
        marginLeft:10,
        alignSelf:'flex-end'
    },
    buttonSocialMedia:{
        flexDirection:'row',
        alignItems:"center",
        
    },
    divider:{
        borderColor:"lightgray",
        borderWidth:.7,

    },
    teacherInformation:{
        // marginHorizontal:6,
        // borderWidth:1,
        paddingHorizontal:2,
        paddingVertical:4,
        borderColor:'#E6E9F2',
        borderRadius:4,
        backgroundColor:'#FAFAFA',
        borderColor:'#0099FF'
    },
    containerBio:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:5,
        paddingHorizontal:2
    },
    teacherBio:{
        width:WIDTH- 75,
        textAlign:"justify",
        fontSize:16,
        color:'black',
        fontWeight:'500'
    },
    quoteLeft:{
        top:0,
        alignSelf:'flex-start',
        paddingHorizontal:2
    },
    quoteRight:{
        alignSelf:'flex-end',
    },
    classes:{
        marginHorizontal:6,
        alignItems:'center',
        justifyContent:'center',
    
    },
    class:{
        flex:1,
        marginTop:2,
        borderWidth:1,
        height:200,
        width:WIDTH-11,
        paddingHorizontal:2,
        paddingVertical:4,
        marginRight:2,
        borderRadius:4,

    }
})

export default styles