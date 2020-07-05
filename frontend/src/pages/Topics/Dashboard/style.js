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
    // item: {
    //     alignItems: "center",
    //     flexGrow: 1,
    //     margin: 4,
    //     padding: 15,
    //     flexBasis: 0,
    //     borderRadius: 5,
    //     opacity: 1
    // },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'sans-serif'
    },
    textView: {
        padding: 5,
        // opacity:0.3,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 8
    },
    itemEmpty: {
        backgroundColor: "transparent"
    },
    viewError: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightskyblue'
    },
    textError: {
        fontSize: 32,
        fontWeight: 'bold'

    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    scrollContainer: {
    },
    appContainer: {
        flex: 1,
        // backgroundColor:'rgba(102, 0, 204,0.7)',
       
    },
  
    containerScrollView: {
        flex: 1,
        // borderTopRightRadius: 25,
        // borderTopLeftRadius: 25,
        // backgroundColor: 'rgba(128,128,128,0.4)',
        paddingTop: 12,
        borderWidth:.5
    },
    item: {
        width: (Dimensions.get('window').width / 2 - 9),
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 7,
        marginHorizontal: 4,
        marginVertical: 5,
        borderWidth: 2,
        borderBottomWidth: 1,
        // backgroundColor: '#9999ff',
       

    },
    textCard: {
        textAlign: "center",
        
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
        // opacity: .7
    }



})

export default TouchableCollors
export { styles }
// export default styles