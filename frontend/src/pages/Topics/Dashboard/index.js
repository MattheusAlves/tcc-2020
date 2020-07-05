import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

import TouchableCollors, { styles } from './style';
import api from "../../../services/api";
import { ScrollView } from 'react-native-gesture-handler';

function RenderComponent(props) {
    const Component = []
    console.log(props.data.length)
    // console.log(props.data)
    for (let i = 0; i < props.data.length; i++) {
        Component.push(
            <>
                <Card style={[styles.item, {

                    opacity: props.style.indexOf(i) > -1 ? .3 : 1
                }]}
                    onPress={() => props._onPress(i)}
                    key={props.data[i]._id}>
                    <Card.Content>
                        <Title style={[styles.textCard, { opacity: 1 }]}>{props.data[i].disciplineName}</Title>
                    </Card.Content>
                </Card>
            </>
        )

    }
    return Component

}

const Dashboard = () => {
    const [opacity, setOpacity] = useState([])
    const [data, setData] = useState()
    const [disciplines, setDisciplines] = useState([{}])
    const [selectDiscipline, setSelectDiscipline] = useState([])
    const Component = []
    function _onPressCard(num) {
        console.log("press button")
        if (opacity.indexOf(num) > -1) {
            setOpacity([...opacity.filter(item => item != num)])
            // setSelectDiscipline([...selectDiscipline.splice(selectDiscipline.indexOf(id), 1)])
        } else
            setOpacity([...opacity, num])
        // setSelectDiscipline([...selectDiscipline, id])

    }
    useEffect(() => {
        api.get("/disciplines/list").then((disciplinesArray) => {
            if (disciplinesArray) {
                console.log("Entrou if disciplines array")
                const arrayLength = disciplinesArray.data.disciplines.length
                setDisciplines(disciplinesArray.data.disciplines)
            }
        }).catch(function (error) {
            console.log(error)
        })
        setOpacity([])
    }, [])
    return (
        // <SafeAreaView>
        <>
            {disciplines.length > 1 ? (
                <View style={styles.appContainer}>
                    <View style={styles.viewHeader}>
                        <Text style={styles.textHeader}>Escolha suas áreas de interesse</Text>
                    </View>
                    <View style={styles.containerScrollView}>
                        <ScrollView style={styles.scrollView}>
                            <View style={styles.container}>
                                <RenderComponent data={disciplines} style={opacity} _onPress={_onPressCard} />
                            </View>
                        </ScrollView>
                    </View>
                    <Button mode="contained" dark loading={false} onPress={() => { }}>Salvar</Button>
                </View>


            ) :
                (<View style={styles.viewError}>
                    <Text style={styles.textError}>Network Error</Text>
                </View>)
            }
        </>
    )
}

export default Dashboard;