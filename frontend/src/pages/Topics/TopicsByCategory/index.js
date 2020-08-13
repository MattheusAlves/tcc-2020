import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Picker,
    Text,
    ScrollView,
    Dimensions,
    Animated
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Path } from 'react-native-svg'
import { DataTable, Avatar, Divider, Drawer, Searchbar, Appbar } from 'react-native-paper'

import api from '../../../services/api'
import styles from './style'


const TopicsByCategory = ({ navigation }) => {
    const [selectedFilter, setSelectedFilter] = useState('relevance')
    const [searchVisibility, setSearchVisibility] = useState(false)
    
    const DEVICE_WIDTH = Dimensions.get('window').width
    const [decayAnim,setDecayAnim] = useState(new Animated.Value(175))

    useEffect(() => {
        if (searchVisibility === true) {
            Animated.decay(
                decayAnim,
                {
                    toValue: 0,
                    duration: 500,
                    velocity: -0.53,
                    deceleration: 0.997
                }
            ).start(() => setDecayAnim(new Animated.Value(175)))
        }
    }, [searchVisibility])

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                searchVisibility === true ?
                    <Animated.View style={{
                        transform: [
                            { translateX: decayAnim }
                        ]
                    }}>
                        < View style={{ width: DEVICE_WIDTH,flex:1, padding:3 }}>
                            <Searchbar
                                placeholder="Search"
                                clearIcon={() => <TouchableOpacity onPress={() => {

                                    setSearchVisibility(false)

                                }}>
                                    <Icon size={20} name="close" />
                                </TouchableOpacity>}
                            />
                        </View>
                    </Animated.View>
                    :
                    <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => setSearchVisibility(true)}>
                        <Icon name='search' size={20} color='white' />
                    </TouchableOpacity>
            ),
        });
    }, [searchVisibility])
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <View style={styles.svgContainer}>
                    <Svg width="100%" height="100%" viewBox='130 0 360 220'  >
                        <Path fill="#0099ff" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,112C480,85,600,75,720,101.3C840,128,960,192,1080,213.3C1200,235,1320,213,1380,202.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" style="--darkreader-inline-fill:#007acc;" data-darkreader-inline-fill=""></Path>
                    </Svg>
                </View>
                <View style={styles.contentTop}>
                    <DropDownPicker
                        items={[
                            { label: 'Relevancia', value: 'relevance', icon: () => <Icon name="flag" size={18} color="#900" /> },
                            { label: 'Data', value: 'date', icon: () => <Icon name="flag" size={18} color="#900" /> },
                        ]}
                        defaultValue={selectedFilter}
                        containerStyle={{ height: 40, width: 140 }}
                        style={{ backgroundColor: '#fafafa' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={item => setSelectedFilter(item.value)}
                    />
                    <TouchableOpacity style={styles.buttonNew}>
                        <Text style={styles.buttonText}>Novo</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryName}>JavaScript</Text>
                    </View>
                    <ScrollView>
                        <TouchableOpacity style={styles.topic}>
                            <View style={styles.topic}>
                                <TouchableOpacity style={styles.userInformation}>
                                    <Avatar.Text size={25} label={'MA'} />
                                    <Text style={styles.username}>Matheus Alves</Text>
                                </TouchableOpacity>
                                <Text style={styles.title}>Título da Tópico novo</Text>
                                <Text style={styles.topicPreview} numberOfLines={3}>este tópico fala sobre sdfsdf  sdfwerf wetchananana tnananadlsmfdsmf  dfo sdfmd msdfksdçmfmfowefioionnweifn  eifewiofowenfofniounfdioun  fioenfiownfoiqnioqnion nfioewnoifnweionfiwenifiwofnwienfiowe i</Text>
                                <View style={styles.topicInformation}>
                                    <Text style={styles.topicDate}>04/04/2020</Text>
                                    <Text style={styles.like}>Likes</Text>
                                </View>
                                <Divider />
                                <Divider />
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </View>
    )

}

export default TopicsByCategory;

