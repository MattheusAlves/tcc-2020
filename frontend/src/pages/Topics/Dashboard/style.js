import React, { useState } from 'react';
import { StyleSheet } from 'react-native'

function TouchableCollors() {
    const colors = ['#ff99e6', '#ff00ff', '#ff4d4d', '#1a75ff', '#66ffc2',
        '#00e600', '#9999ff', '#33cccc']

    return colors[Math.floor(Math.random() * 7)]
}

const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        flexGrow: 1,
        margin: 4,
        padding: 20,
        flexBasis: 0,
        borderRadius: 5,
       
    },
    text: {
        fontSize: 15,
        fontFamily: 'sans-serif-medium'
    },
    itemEmpty: {
        backgroundColor: "transparent"
    },
})

export default TouchableCollors
export { styles }
// export default styles