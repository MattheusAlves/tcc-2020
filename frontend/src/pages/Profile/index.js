import React, { useState, useRef } from 'react';
import { View, Dimensions, Animated, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import Header from '../../components/ProfileHeader'
import CardSvg from '../../components/CardSvg'
import styles from './styles'

const Profile = () => {
    const [scrollY] = useState(new Animated.Value(0))
    const colors = useRef(['#6C00F6', '#FF0000', '#108DD3', '#FF5C00', '#FF9900', '#24B400', '#0075FF', '#E09017', '#6C00F6',
        '#FF0000', '#108DD3', '#FF5C00', '#FF9900', '#24B400', '#0075FF', '#E09017', '#6C00F6', '#FF0000', '#108DD3', '#FF5C00',
        '#FF9900', '#24B400', '#0075FF', '#E09017', '#6C00F6', '#FF0000', '#108DD3', '#FF5C00', '#FF9900', '#24B400', '#0075FF',
        '#E09017'])
        console.log(colors[0])

    return (
        <Header scrollY={scrollY}>
            <SafeAreaView style={{ flex: 1 }}>
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
                                <View style={styles.divider} />
                                <View style={styles.socialMedia}>
                                    <TouchableOpacity style={styles.buttonSocialMedia}>
                                        <Icon name="wechat" size={45} color='#25d366' />
                                        <Text style={styles.linkSocialMedia}>+55 (19)99770-6148</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.divider} />
                                <View style={styles.socialMedia}>
                                    <TouchableOpacity style={styles.buttonSocialMedia}>
                                        <Icon name="linkedin-square" size={55} color='#2867b2' />
                                        <Text style={styles.linkSocialMedia}>br.linkedin.com/in/MattheusAlves</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.teacherInformation}>
                                <View style={styles.containerBio}>
                                    <Icon size={20} name="quote-left" color='gray' style={styles.quoteLeft} />
                                    <Text style={styles.teacherBio}>Lorem ipsum sodales ornare congue dolor semper ultricies a tempus, habitasse neque vivamus fringilla sollicitudin nullam quam. lobortis egestas elit consectetur augue sociosqu leo potenti, praesent phasellus tempor ut rhoncus orci. cursus morbi eu quisque ac ipsum nam primis sit.</Text>
                                    <Icon size={20} name="quote-right" color='gray' style={styles.quoteRight} />
                                </View>
                            </View>
                            <ScrollView style={{paddingBottom:50}} horizontal={true} contentContainerStyle={styles.classes} showsHorizontalScrollIndicator={false}>
                                <View style={[styles.class,{backgroundColor:colors.current[0]}]}><Text></Text></View>
                                <View style={[styles.class,{backgroundColor:colors.current[1]}]}></View>
                                <View style={[styles.class,{backgroundColor:colors.current[2]}]}></View>
                            </ScrollView>
                        </View>
                    </Animated.ScrollView>
                </View>
            </SafeAreaView>

        </Header>
    )
}

export default Profile;

