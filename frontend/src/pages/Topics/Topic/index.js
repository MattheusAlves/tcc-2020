import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useReducer,
  useCallback,
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {Avatar, Headline} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {format} from 'date-fns';

import styles from './style';
import api from '../../../services/api';
import {useAuth} from '../../../contexts/auth';
import Svg from './components/Svg';

const initialState = {
  count: 5,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 5, pending: true};
    case 'decrement':
      return {count: state.count - 5};
    default:
      throw new Error();
  }
}

const Topic = ({navigation,route}) => {
  const [topic, setTopic] = useState();
  const [userInitials, setUserInitials] = useState('');
  const [topicResponses, setTopicResponses] = useState([]);
  const [response, setResponse] = useState('');
  const [pending, setPending] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [responsesQuantity, setResponsesQuantity] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const {topicId} = route.params;
  const {user} = useAuth();

  useEffect(() => {
    const loadTopic = async () => {
      api.get(`/question/${topicId}`).then((result) => {
        console.log('result:', result.data);
        setTopic(result.data);
        setUserInitials(getInitials(result.data.user.name));
      });
    };
    loadTopic();
    getResponses();
  }, [state.count]);

  const getResponsesQuantity = async () => {
    api
      .get(`/question/response/quantity/${user._id}/${topicId}`)
      .then((result) => {
        if (result.data.answersQuantity === 0) {
          setResponsesQuantity(null);
        } else setResponsesQuantity(result.data.answersQuantity);
      })
      .catch((err) => console.log(err));
  };

  const getResponses = async () => {
    return api
      .get(`/question/responses/${user._id}/${topicId}`, {
        params: {limit: state.count},
      })
      .then((responses) => {
        const allResponses = responses.data.map((response) => {
          response.initials = getInitials(response.user.name);
          const date = new Date(response.createdAt);
          const formatedData = format(date, 'dd/MM/yyyy hh:mm');
          response.createdAt = formatedData;
          return response;
        });
        return allResponses;
      })
      .then((data) => {
        setTopicResponses(data);
        setPending(false);
        getResponsesQuantity();
      })
      .catch((err) => console.log(err));
  };

  function getInitials(name) {
    let initials = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || '') + (initials.pop() || '')
    ).toUpperCase();
    return initials;
  }

  const onScrollBottom = async (e) => {
    const windowHeight = Dimensions.get('window').height;
    const height = e.nativeEvent.contentSize.height;
    const offset = e.nativeEvent.contentOffset.y;
    if (
      windowHeight + offset >= height &&
      !pending &&
      state.count <= responsesQuantity
    ) {
      setPending(true);
      dispatch({type: 'increment'});
    }
  };
  const setRate = (item, value) => {
    const rate = value === true ? 'like' : 'dislike';
    return api
      .put(`/question/response/rate/${user._id}/${item._id}`, {
        rate,
      })
      .then(() => {
        return;
      });
  };
  const handleRate = (item, value) => {
    setRate(item, value).then(() => {
      getResponses();
    });
  };

  const handleResponse = () => {
    console.log(response);
    api
      .post(`/question/response/${user._id}/${topic._id}`, {
        response,
      })
      .then((result) => {
        getResponses();
        setResponse('');
      });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getResponses().then(() => setRefreshing(false));
  }, []);

  return topic ? (
    <View style={styles.container}>
      <ScrollView
        onScroll={(e) => onScrollBottom(e)}
        scrollEventThrottle={500}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.userInformation}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile',{id:topic.user._id})}>
            <Avatar.Text
              size={65}
              label={userInitials}
              style={styles.icon}
              backgroundColor="#285BC8"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile',{id:topic.user._id})}>
            <Headline style={styles.name}>{topic.user.name}</Headline>
          </TouchableOpacity>
          <Svg
            style={{position: 'absolute', alignSelf: 'flex-end', margin: 10}}
          />
        </View>
        <View style={styles.topic}>
          <Text style={styles.title}>{topic.title}</Text>
          <Text style={styles.description}>{topic.description}</Text>
          <View style={styles.footerWrapper}>
            <Text style={styles.createdAt}>{`Criado em ${format(
              new Date(topic.createdAt),
              'dd/MM/yyyy hh:mm',
            )}`}</Text>
            <View style={styles.rateWrapper}>
              <View style={styles.likeWrapper}>
                <Text style={styles.rateLength}>0</Text>
                <TouchableOpacity>
                  <Icon name="thumbs-up" size={20} />
                </TouchableOpacity>
              </View>
              <View style={styles.dislikeWrapper}>
                <Text style={styles.rateLength}>0</Text>
                <TouchableOpacity>
                  <Icon name="thumbs-down" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerResponse}>
          <TextInput
            multiline
            style={styles.inputResponse}
            onChangeText={(text) => setResponse(text)}
            value={response}
            placeholder="Responda a este tópico"
            numberOfLines={5}
            maxLength={1000}
            returnKeyType="done"
          />
          <TouchableOpacity
            style={styles.submitWrapper}
            onPress={() => handleResponse()}>
            <Text style={styles.submit}>Postar</Text>
          </TouchableOpacity>
        </View>
        {topicResponses.length < 1 && responsesQuantity != null ? (
          <ActivityIndicator size={45} />
        ) : (
          <View style={styles.responses}>
            {topicResponses.map((item) => (
              <View style={styles.response} key={item._id}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile',{id:item.user._id})}>
                  <Avatar.Text
                    size={30}
                    label={item.initials}
                    style={styles.responseIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile',{id:item.user._id})}>
                  <Headline style={styles.responseName}>
                    {item.user.name}
                  </Headline>
                </TouchableOpacity>
                <View style={styles.separator} />
                <Text>{item.response}</Text>
                <View style={styles.responseFooter}>
                  <Text style={styles.createdAt}>{item.createdAt}</Text>
                  <View style={styles.notes}>
                    <View style={styles.viewRate}>
                      <Text style={styles.rateLength}>
                        {console.log(item)}
                        {item.likes && item.likes != 0 ? item.likes : '0'}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          handleRate(item, true);
                        }}>
                        <Icon
                          name="thumbs-up"
                          size={20}
                          color={
                            item.userRatedIndicator === 'like' ? 'blue' : 'gray'
                          }
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.viewRate}>
                      <Text style={styles.rateLength}>
                        {item.dislikes && item.dislikes != 0
                          ? item.dislikes
                          : 0}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          handleRate(item, false);
                        }}>
                        <Icon
                          name="thumbs-down"
                          size={20}
                          color={
                            item.userRatedIndicator === 'dislike'
                              ? 'red'
                              : 'gray'
                          }
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  ) : (
    <ActivityIndicator />
  );
};

export default Topic;
