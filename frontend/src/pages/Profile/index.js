import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { View, Animated, Text, TouchableOpacity, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import api from '../../services/api'
import Header from '../../components/ProfileHeader'
import CardSvg from '../../components/CardSvg'
import styles from './styles'

const Profile = () => {
    const [scrollY] = useState(new Animated.Value(0))
    const [profile, setProfile] = useState()
    const [teacher, setTeacher] = useState(false)
    const colors = useRef(['#6C00F6', '#FF0000', '#108DD3', '#FF5C00', '#FF9900', '#24B400', '#0075FF', '#E09017', '#6C00F6',
        '#FF0000', '#108DD3', '#FF5C00', '#FF9900', '#24B400', '#0075FF', '#E09017', '#6C00F6', '#FF0000', '#108DD3', '#FF5C00',
        '#FF9900', '#24B400', '#0075FF', '#E09017', '#6C00F6', '#FF0000', '#108DD3', '#FF5C00', '#FF9900', '#24B400', '#0075FF',
        '#E09017']).current

    useEffect(() => {
        api.get('/user/profile', {
            params: {
                id: '5f72501058028435b4ad5782'
            }
        }).then(profile => {
            if (profile.data.user.teacher) {
                setTeacher(true)
            }
            setProfile(profile.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    useEffect(() => {
    console.log(profile)
    }, [profile])

    return !profile ?
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: "center", justifyContent: 'center' }}>
            <ActivityIndicator size={50} />
        </View>
        : // active indicator
        <Header scrollY={scrollY} name={profile.user.name} >
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
                                }, useNativeDriver: true
                            })}
                        contentContainerStyle={{ paddingBottom: 50, zIndex: 0 }}
                        style={{ zIndex: 0 }}>
                        <View style={styles.container}>
                            <View style={styles.userInformation}>
                                <View style={styles.socialMedia}>
                                    <TouchableOpacity style={styles.buttonSocialMedia}>
                                        <Icon name="github" size={55} />
                                        <Text style={styles.linkSocialMedia}>{`github.com/${profile.user.github}`}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.divider} />
                                <View style={styles.socialMedia}>
                                    <TouchableOpacity style={styles.buttonSocialMedia}>
                                        <Icon name="wechat" size={45} color='#25d366' />
                                        <Text style={styles.linkSocialMedia}>{`+55 ${profile.user.phone}`}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.divider} />
                                <View style={styles.socialMedia}>
                                    <TouchableOpacity style={styles.buttonSocialMedia}>
                                        <Icon name="linkedin-square" size={55} color='#2867b2' />
                                        <Text style={styles.linkSocialMedia}>{`br.linkedin.com/in/${profile.user.linkedin}`}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {teacher == true ? <>
                                <TouchableOpacity style={styles.teacherChat}>
                                    <Text style={styles.teacherChatTxt}>Envie uma mensagem para este professor</Text>
                                </TouchableOpacity>

                                <View style={styles.teacherInformation}>
                                    <View style={styles.containerBio}>
                                        <Icon size={20} name="quote-left" color='gray' style={styles.quoteLeft} />
                                        <Text style={styles.teacherBio}>{profile.bio}
                                            <Icon size={20} name="quote-right" color='gray' style={styles.quoteRight} /></Text>
                                    </View>
                                </View>

                                <ScrollView style={{ paddingBottom: 50 }}
                                    horizontal={true}
                                    contentContainerStyle={styles.classes}
                                    showsHorizontalScrollIndicator={false}>
                                    {profile.classes.map((classe,index) => {

                                        return <TouchableOpacity>
                                            <View style={[styles.class, { backgroundColor: colors[index] }]}>
                                                <CardSvg style={styles.svg} />
                                                <Text style={styles.classTitle}>{classe.discipline.disciplineName}</Text>
                                                <Text style={styles.classPrice}>Preço da hora aula  </Text>
                                                <Text style={styles.classPrice}>{`R$:${classe.hourClassPrice}`}</Text>
                                                <Text style={styles.rank}>12 Avaliações. Nota: 8</Text>
                                            </View>
                                        </TouchableOpacity>

                                    })}
                                </ScrollView>
                            </> : <></>}
                        </View>
                    </Animated.ScrollView>
                </View>
            </SafeAreaView>
        </Header>



}

export default Profile;

