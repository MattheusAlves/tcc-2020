import React, { useEffect,useState } from 'react';
import { View, Text } from 'react-native';

import styles from './style'

const Response = ({ route, navigation }) => {
    const [response, setResponse] = useState()
    useEffect(() => {
        const { response } = route.params
        setResponse(response)
    }, [])
    return (
        response ? (
            <View style={styles.container}>
                <Text>{response}</Text>
            </View>
        ) : <Text>Carregando...</Text>
    )
}

export default Response;