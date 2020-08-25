import React, { useEffect,useLayoutEffect, useState, useReducer, useCallback } from 'react';
import { View, Text, TouchableOpacity, TextInput, Dimensions, RefreshControl,ActivityIndicator } from 'react-native';
import { Avatar, Headline } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './style'
import api from '../../../services/api'


const initialState = {
  count: 5,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 5, pending: true };
    case 'decrement':
      return { count: state.count - 5 };
    default:
      throw new Error();
  }
}

const setRate = (item, value) => {
  const rate = value === true ? 'like' : 'dislike'
  return api.put(`/question/response/rate/5e8ccefd3d1d05332c4b0bee/${item._id}`, {
    rate
  }).then(() => {
    return
  })
}

const Topic = ({ route }) => {
  const [topic, setTopic] = useState()
  const [userInitials, setUserInitials] = useState('')
  const [topicResponses, setTopicResponses] = useState([])
  const [response, setResponse] = useState('')
  const [pending, setPending] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState);
  const [responsesQuantity, setResponsesQuantity] = useState(0)
  const [refreshing, setRefreshing] = useState(false)
  const {topicId} = route.params
  
  useEffect(() => {
    const loadTopic = async () => {
      api.get(`/question/${topicId}`)
        .then((result) => {
          console.log("result:",result.data)
          setTopic(result.data)
          setUserInitials(getInitials(result.data.user.name))
          
        })
      }
      loadTopic()
      getResponses()
  }, [state.count])

  const getResponsesQuantity = async () => {
    api.get(`/question/response/quantity/5e8ccefd3d1d05332c4b0bee/${topicId}`)
      .then((result) => {
        if(result.data.answersQuantity === 0){
          setResponsesQuantity(null)
        }else
        setResponsesQuantity(result.data.answersQuantity)
      })
  }

  const getResponses = async () => {
    return api.get(`/question/responses/5e8ccefd3d1d05332c4b0bee/${topicId}`,
      {
        params: { limit: state.count }
      })
      .then((responses) => {
        const allResponses = responses.data.map((response) => {
          response.initials = getInitials(response.user.name)
          const date = new Date(response.createdAt)
          const formatedData = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
          response.createdAt = formatedData
          return response
        })
        return allResponses
      }).then((data) => {
        setTopicResponses(data)
        setPending(false)
        getResponsesQuantity()
      })
  }

  function getInitials(name) {
    let initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    return initials
  }

  const onScrollBottom = async (e) => {
    const windowHeight = Dimensions.get('window').height
    const height = e.nativeEvent.contentSize.height
    const offset = e.nativeEvent.contentOffset.y
    if (windowHeight + offset >= height && !pending && state.count <= responsesQuantity) {
      setPending(true)
      dispatch({ type: 'increment' })
    }
  }

  const handleRate = (item, value) => {
    setRate(item, value).then(() => {
      getResponses()
    })
  }

  const handleResponse = () => {
    console.log(response)
    api.post(`/question/response/5e8ccefd3d1d05332c4b0bee/${topic._id}`, {
      response
    }).then((result) => {
      getResponses()
      setResponse('')
    })
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    getResponses().then(() => setRefreshing(false))
  }, [])

  return (
    topic ? (
      <View style={styles.container}>
        <ScrollView onScroll={(e) => onScrollBottom(e)} scrollEventThrottle={500}
          refreshControl={
            <RefreshControl refreshing={refreshing}
              onRefresh={onRefresh} />
          }>
          <View style={styles.userInformation}>
            <TouchableOpacity>
              <Avatar.Text size={54} label={userInitials} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Headline style={styles.name}>{topic.user.name}</Headline>
            </TouchableOpacity>
          </View>
          <View style={styles.topic}>
            <Text style={styles.title}>{topic.title}</Text>
            <Text style={styles.description}>{topic.description}</Text>
          </View>
          <View style={styles.containerResponse}>
            <TextInput style={styles.inputResponse} onChangeText={(text) => setResponse(text)} value={response} />
            <TouchableOpacity style={styles.post} onPress={() => handleResponse()}>
              <Text>Postar</Text>
            </TouchableOpacity>
          </View>
          {topicResponses.length < 1 && responsesQuantity != null ? 
          <ActivityIndicator size={45}/>
            :
          <View style={styles.responses}>
            {topicResponses.map(item => (
              <View style={styles.response}>
                <TouchableOpacity>
                  <Avatar.Text size={30} label={item.initials} style={styles.responseIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Headline style={styles.responseName}>{item.user.name}</Headline>
                </TouchableOpacity>
                <Text>{item.response}</Text>
                <View style={styles.responseFooter}>
                  <Text style={styles.createdAt}>{item.createdAt}</Text>
                  <View style={styles.notes}>
                    <View style={styles.viewRate}>
                      <Text style={styles.rateLength}>{item.likes != 0 ? item.likes : ''}</Text>
                      <TouchableOpacity onPress={() => {
                        handleRate(item, true)
                      }}>
                        <Icon name='thumbs-up' size={20} color={item.userRatedIndicator === 'like' ? 'blue' : 'gray'} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.viewRate}>
                      <Text style={styles.rateLength}>{item.dislikes != 0 ? item.dislikes : ''}</Text>
                      <TouchableOpacity onPress={() => {
                        handleRate(item, false)

                      }}>
                        <Icon name='thumbs-down' size={20} color={item.userRatedIndicator === 'dislike' ? 'red' : 'gray'} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

            ))}
          </View>
          }
        </ScrollView>
      </View>
    ) : <ActivityIndicator/>
  )
}

export default Topic;