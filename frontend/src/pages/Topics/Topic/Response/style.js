import {StyleSheet,Dimensions} from 'react-native'

const DEVICE_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'rgb(255,255,255)',
        padding: 10,

    }
})

export default styles