import React, { useState } from 'react';
import { View, Dimensions, Animated, StyleSheet, Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import Header from '../../components/ProfileHeader'
import styles from './styles'

const Profile = () => {
    const [scrollY] = useState(new Animated.Value(0))
    return (

        <Header scrollY={scrollY}>
            <View style={{ flex: 1 }}>
                <Animated.ScrollView
                    scrollEventThrottle={16}
                    onScroll={Animated.event([{
                        nativeEvent: {
                            contentOffset: { y: scrollY }
                        },

                    }],
                        {
                            listener: (event) => {
                                console.log(event.nativeEvent.contentOffset.y)
                            }, useNativeDriver: true
                        })}
                    contentContainerStyle={{ paddingBottom: 50, zIndex: 0 }}
                    style={{ zIndex: 0 }}>
                    <View style={styles.container}>
                        <View style={styles.userInformation}>
                            <View style={styles.socialMedia}>
                                <TouchableOpacity style={styles.buttonSocialMedia}>
                                <Icon name="github" size={55} />
                                    <Text style={styles.linkSocialMedia}>github.com/MattheusAlves</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.divider}/>
                            <View style={styles.socialMedia}>
                                <TouchableOpacity style={styles.buttonSocialMedia}>
                                <Icon name="wechat" size={45}  />
                                <Text style={styles.linkSocialMedia}>+55 (19)99770-6148</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.divider}/>
                            <View style={styles.socialMedia}>
                                <TouchableOpacity style={styles.buttonSocialMedia}>
                                <Icon name="linkedin-square" size={55} />
                                    <Text style={styles.linkSocialMedia}>br.linkedin.com/in/MattheusAlves</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.teacherInformation}>

                        </View>
                    </View>

                </Animated.ScrollView>
            </View>
        </Header>
    )
}

export default Profile;

