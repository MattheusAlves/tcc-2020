import { StyleSheet, Dimensions } from 'react-native'
import common from '../../commonStyles'

const HEADER_MAX_HEIGHT = 120
const HEADER_MIN_HEIGHT = 70
const PROFILE_IMAGE_MAX_HEIGHT = 80
const PROFILE_IMAGE_MIN_HEIGHT = 40

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:WIDTH,
        height:200,
        backgroundColor:common.colors.background,
    },
    content:{
        height:200,
        backgroundColor:'white'
    }
})

export default styles