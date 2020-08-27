import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerHeader: {
        paddingTop: 100,
        width: WIDTH,
        backgroundColor: 'blue',
        elevation: 8,
        zIndex: 2

    },
    containerBody: {
        flex: 1,
        backgroundColor: 'white',
        zIndex: 0,
        alignItems: 'center',
    },
    avatar: {
        position: "absolute",
        marginTop: -37,
        elevation: 10,
        borderWidth: 2,
        borderColor: 'white'

    },
    divider: {
        borderTopWidth: 1,
        width: WIDTH,
        borderColor: 'black',
        alignItems: 'center',

    },
    userInformation: {
        flexDirection: 'row',
        width: WIDTH,
        paddingTop: 35,
        paddingHorizontal: 3,
        justifyContent: "space-between",
        // borderWidth: 1
    },
    teacherSince:{
        fontStyle:'italic',
        color:'gray'
    },
    userContact: {

    },
    disciplinesContainer: {
        alignItems: 'center',
        paddingBottom: 10,
        paddingHorizontal: 5,
        borderLeftWidth: 1,
        width: WIDTH / 2
    },
    disciplineText: {
        fontSize: 18,
        // fontWeight:'700',


    },
    disciplinesContent: {
        alignSelf: 'flex-start',
        paddingVertical: 3,
        paddingHorizontal: 2,
        borderRadius: 4,
        borderColor: 'gray'
    },
    userNameContainer: {
        width: WIDTH / 2,
    },
    userName: {
        fontSize: 18
    },
    numberContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    chatMessageContainer: {
        position:'absolute',    
        justifyContent: 'center',    
        alignSelf:'flex-end',
        marginTop:74,
        right:8,
        alignItems: "center",
        elevation:20,
        borderRadius:20,
        zIndex:4
    },
    chatMessage:{
        borderWidth: 2,
        borderRadius:20,
        backgroundColor:'white',
        padding:8,
        borderColor: 'black',
    },
    iconMessage:{
       
    },
    userBio:{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        padding:10,
        marginTop:10,
        marginHorizontal:10,
        borderWidth:3,
        borderRadius:8,
        borderColor:'lightblue',
    },
    
    bio:{
        textAlign:"justify",
        fontStyle:"italic",
        fontSize:18,
        color:'gray',
    },
    classInformation:{
        width:WIDTH,
        marginTop:10,
        justifyContent:'center'
    },
    class:{
        fontSize:18,
        color:'gray',
    },
    classes:{
        flex:1,
        marginHorizontal:5
    },
    scrollClasses:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center'
    },
     discipline:{
        marginHorizontal:3,
        fontSize:18,
        fontWeight:"bold",
        color:'white'
    },
    classPrice:{
        width:150,
        borderWidth:1,
        borderBottomColor:'blue',
        borderTopColor:'lightblue',
        borderRadius:8,
        alignItems:'center',
        backgroundColor:'rgba(2,0,100,.7)',
        color:'white',
        fontSize:18,
    },
    priceLabel:{
        fontSize:18,
        color:'white',
        padding:2
    },
    price:{
        fontSize:18,
        color:'white',
        padding:1
        // fontWeight:'700' 
    },
    disciplineContainer:{
        width:150,
        alignItems:"center",
        borderRadius:8,
        padding:5,
        backgroundColor:'rgba(2,0,100,1)',
        zIndex:3
    },
    next:{
        position:'absolute',
        right:0,
        opacity:.6,
        zIndex:3,
        paddingHorizontal:10
    }
})

export default styles