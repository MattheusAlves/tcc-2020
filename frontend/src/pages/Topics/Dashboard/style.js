import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native'

let oldColors = []
function TouchableCollors() {
    const colors = ['#87cefa', '#c8a2c8', '#c8f4d5', '#B0C4DE', '#66ffc2',
        '#dbbdff', '#9999ff', '#33cccc']
    const selectColor = colors[Math.floor(Math.random() * 7)]
    if (selectColor === oldColors[oldColors.length - 1] || selectColor === oldColors[oldColors.lengh - 2]) {
        console.log("exec if")
        return TouchableCollors()
    } else
        oldColors = [...oldColors, selectColor]

    return selectColor
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    scrollView: {
        flex:1,
        marginBottom:5
    },
    scrollViewItems: {
        //don't put flex:1
        flexDirection: "row",
        flexWrap: 'wrap',
        flexGrow:1,
        marginTop: 12,
        paddingTop: 2,
        paddingBottom: 12,
        borderWidth: .5
    },
    item: {
        width: (Dimensions.get('window').width / 2 - 12),
        height: 80,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: 2,
        borderBottomWidth: 2,
        margin: 5,
        overflow: 'hidden',
    },
    svg: {
        flex: 1,
        position: "absolute",
        justifyContent: "center",
        alignSelf: "center",
        zIndex: 1,
        backgroundColor: 'rgba(255,255,255,.7)',
        // opacity:.7
    },
    cardContent: {
        // backgroundColor:'red',
        justifyContent: "center",
        zIndex: 2
    },
    cardText: {
        textAlign: "center",
        fontSize: 13,
        fontFamily: 'Roboto-Regular',
        fontWeight: "bold",
        zIndex: 3,
        padding: 0,
    },
    textContainer: {
        flex: 1,
        width: (Dimensions.get('window').width / 2 - 25),
        backgroundColor: 'rgba(255,255,255,.3)',
        zIndex: 4,
        borderRadius: 7,
    },
    textHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5
    },
    viewHeader: {
        height: 60,
        justifyContent: 'center',
    },
    viewError: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textError: {
        fontSize: 32,
        fontWeight: 'bold'

    },



})

export default TouchableCollors
export { styles }
// export default styles