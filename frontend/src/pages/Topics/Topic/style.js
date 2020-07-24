import { StyleSheet, Dimensions } from 'react-native'

const DEVICE_WIDTH = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgb(255,255,255)',
        padding: 10,
    },
    userInformation: {
        // flex:1,
        marginBottom: 1,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin:5,    
    },
    icon: {
    },
    responseName:{
      fontSize:17, 
      fontWeight:'700' 
    },
    topic: {    
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin:5,
    },
    containerResponse:{
        flexDirection:'row',
        alignItems:'center',
    },
    inputResponse:{
        flex:1,
        borderWidth:1,
        padding:5,
        margin:5,
        borderRadius:7
    },
    post:{
        borderWidth:1,
        padding:8,
    },
    responses:{

    },
    response:{
        borderWidth:1,
        padding:8,
        margin:5,
        borderRadius:5
    },
    buttonResponse:{
        alignSelf:'flex-end'
    }



})

export default styles