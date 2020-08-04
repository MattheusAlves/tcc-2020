import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        marginTop:46
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
        zIndex:10
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
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: (Dimensions.get('screen').width),
    },

    topicsNotFoundView: {
        flex: 1,
    },
    touchableSubtitle: {
        borderRadius: 5,
        backgroundColor: 'gray',
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: .3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    topicsNotFoundTitle: {
        fontSize: 18,
        textAlign: 'center',
        padding: 8,
        color: 'black',
        fontWeight: '700',


    },
    topicsNotFoundSubtitle: {
        fontSize: 19,
        fontWeight: '700',
        textAlign: 'center',
        padding: 20,
        borderRadius: 5,
        // backgroundColor: 'rgba(51, 102, 255,8)',
        backgroundColor: 'white',
        textAlign: 'center'
    },
    logo: {
        width: 100,
        height: 90,
    },
    containerNotFound: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,

    },
    scrollView:{
        }
})


export default styles