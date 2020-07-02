import React, { useState } from 'react';
import { StyleSheet } from 'react-native'

function TouchableCollors() {
    const colors = ['#87cefa', '#c8a2c8', '#c8f4d5', '#B0C4DE', '#66ffc2',
        '#dbbdff', '#9999ff', '#33cccc']

    return colors[Math.floor(Math.random() * 7)]
}

const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        flexGrow: 1,
        margin: 4,
        padding: 15,
        flexBasis: 0,
        borderRadius: 5,
        opacity:1
    },
    text: {
        fontSize: 15,
        fontWeight:'bold',
        textAlign:'center',
        fontFamily: 'sans-serif'
    },
    textView:{
        padding:5,
        // opacity:0.3,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:8
    },
    itemEmpty: {
        backgroundColor: "transparent"
    },

})

export default TouchableCollors
export { styles }
// export default styles