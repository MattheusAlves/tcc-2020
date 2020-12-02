import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TopicsNotFound = ({navigation}) => {
  return (
    <View style={styles.background}>
      <View style={styles.containerNotFound}>
        <Text style={styles.topicsNotFoundTitle}>
          Ainda não há nenhum tópico nas categorias selecionadas
        </Text>
        <TouchableOpacity style={styles.touchableSubtitle} onPress={() => navigation.navigate('CreateTopic')}>
          <Text style={styles.topicsNotFoundSubtitle}>Inicie um Tópico</Text>
          <Icon name="rocket" size={30} color="#660066" style={{paddingHorizontal:10}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TopicsNotFound;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width,
    backgroundColor: '#f5fcff',
  },
  topicsNotFoundView: {
    flex: 1,
  },
  touchableSubtitle: {
    flexDirection: 'row',
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center',
    padding:20,
    alignItems: 'center',
    borderWidth: 0.3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    backgroundColor: 'white',
    elevation: 4,
  },
  topicsNotFoundTitle: {
    fontSize: 24,
    textAlign: 'center',
    padding: 8,
    color: '#285BC8',
    fontWeight: '700',
    marginBottom:10
  },
  topicsNotFoundSubtitle: {
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center',
    borderRadius: 5,
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 90,
  },
  containerNotFound: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});
