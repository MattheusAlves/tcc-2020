import React, { useState, useEffect, useLayoutEffect, useReducer } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Dimensions,
    Animated
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Searchbar } from 'react-native-paper'

import api from '../../../services/api'
import styles from './style'
import { useTopic } from '../../../contexts/topic'
import WaveHeader from '../../../components/WaveHeader'

const initialState = {
    count: 5,
};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 5 };
        case 'decrement':
            return { count: state.count - 5 };
        default:
            throw new Error();
    }
}

const TopicsByCategory = ({ navigation }) => {
    const [selectedFilter, setSelectedFilter] = useState('relevance')
    const [searchVisibility, setSearchVisibility] = useState(false)
    const [topics, setTopics] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState);

    const DEVICE_WIDTH = Dimensions.get('window').width
    const [decayAnim, setDecayAnim] = useState(new Animated.Value(175))
    const { topicData } = useTopic()

    useEffect(() => {
        loadTopics()
            .then((result) => {
                console.log('reusltado:', result.data)
                setTopics(result.data)
            })
            .catch((error) => console.log("Error:", error))


    }, [])

    useLayoutEffect(() => {
        const loadSearchHeader = async () => {
            navigation.setOptions({
                headerRight: () => (
                    searchVisibility === true ?
                        <Animated.View style={{
                            transform: [
                                { translateX: decayAnim }
                            ]
                        }}>
                            < View style={{ width: DEVICE_WIDTH, flex: 1, padding: 3 }}>
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
                        <TouchableOpacity style={{ paddingHorizontal: 20 }}
                            onPress={() => setSearchVisibility(true)}>
                            <Icon name='search' size={20} color='white' />
                        </TouchableOpacity>
                ),
            });
        }
        loadSearchHeader()
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

    const loadTopics = async () => {
        return await api.get(`/question/by/categorie/${topicData.categoryId}`, {
            params: { limit: state.count }
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <View style={styles.svgContainer}>
                    <WaveHeader />
                </View>
                <View style={styles.contentTop}>
                    <TouchableOpacity style={styles.buttonNew}>
                        <Text style={styles.buttonText}>Novo</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <ScrollView>
                        {topics.length > 0 && topics.map(topic =>  
                        <TouchableOpacity style={styles.topicContainer} key ={topic._id}>
                            <View style={styles.topic}>
                                <TouchableOpacity style={styles.userInformation}>
                                    <Avatar.Text size={25} label={'MA'} />
                                    <Text style={styles.username}>{topic.user.name}</Text>
                                </TouchableOpacity>
                                <Text style={styles.title}>{topic.title}</Text>
                                <Text style={styles.topicPreview} numberOfLines={3}>
                                {topic.description}
                                 </Text>
                                <View style={styles.topicInformation}>
                                    <Text style={styles.topicDate}>{topic.createdAt}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.info}>13 <Icon name="thumbs-up" size={22} color='rgba(0, 153, 255,1)' /></Text>
                                        <Text style={styles.info}>123 <Icon name="comments" size={22} color='rgba(0, 153, 255,1)' /></Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        )}
                    </ScrollView>
                </View>
            </View>
        </View>
    )

}

export default TopicsByCategory;

