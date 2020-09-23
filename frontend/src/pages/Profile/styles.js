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
        marginHorizontal:6,
        borderWidth:1,
        paddingHorizontal:2,
        paddingVertical:4,
        borderColor:'#E6E9F2',
        borderRadius:4,
        backgroundColor:'#FAFAFA'
    }
})

export default styles