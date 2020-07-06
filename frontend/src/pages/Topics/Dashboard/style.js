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

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    appContainer: {
        flex: 1,
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    },
    containerScrollView: {
        flex: 1,
        marginTop: 12,
        paddingTop: 2,
        borderWidth: .5
    },
    item: {
        width: (Dimensions.get('window').width / 2 - 12),
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: 2,
        borderBottomWidth: 1,
        margin: 5,
        overflow:'hidden'

    },
  
    svg: {
        flex: 1,
        
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        width: (Dimensions.get('window').width / 2 - 16),
        height:82,
        position:"absolute"
    },
    cardContent: {
        justifyContent: "center"
    },
    textCard: {
        textAlign: "center",
        fontSize: 13,
        fontFamily: 'Roboto-Regular',
        fontWeight: "bold",
        zIndex:1,
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