import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Avatar, Headline } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './style'

const Topic = ({ route, navigation }) => {
  const [topic, setTopic] = useState()
  useEffect(() => {
    const { topic } = route.params
    setTopic(topic)
    console.log("teste:", topic)
  }, [])
  const handleResponse = (response) => {
    console.log(response)
    navigation.navigate("Response",{response:response})
  } 
  return (
    topic ? (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.userInformation}>
            <TouchableOpacity>
              <Avatar.Text size={54} label="MA" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Headline style={styles.name}>Matheus Alves</Headline>
            </TouchableOpacity>
          </View>
          <View style={styles.topic}>
            <Text style={styles.title}>{topic.body.title}</Text>
            <Text style={styles.description}>{topic.body.description}</Text>
          </View>
          <View style={styles.containerResponse}>
            <TextInput style={styles.inputResponse} />
            <TouchableOpacity style={styles.post}>
              <Text>Postar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.responses}>
            <View style={styles.response}>
              <TouchableOpacity>
                <Avatar.Text size={30} label="JP" style={styles.responseIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Headline style={styles.responseName}>José Pereira</Headline>
              </TouchableOpacity>
              <Text>Está é uma resposta de etste lorim upsou sdkjfsdjkf dsfjksd fjksdbkf sdsd bfkjdbfkjsdb
              ksdfjkdsflk jsdk sdflisdkl fnsdlk sdflsdijf lk skldfnlsdk n sdfdsl knflksd nfsd fn
              dsfsdfsdfdsfds ff
              ds sdf
              sdfsdfsdfsdfsdfsdfsdfdsfdsfd sf sdfsdf sdfsdfds tewsd gsdg gsdfsdjkbfsejkdfbsdbjkfbsdjkbfjk
              dsfsdklfnksldnfklnsdklfnskldnfklnksdlfklsdnklfnksdnkfskldnfklsdnfklsdnfklnsdklfnklsdfklnlskfn
              </Text>
              <TouchableOpacity style={styles.buttonResponse} onPress={() => handleResponse('teste')}>
                <Text style={styles.txtResponse}>Responder</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    ) : <Text>Carregando...</Text>
  )
}

export default Topic;