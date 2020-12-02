import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputMessage: {
    flex: 1,
    borderWidth: 1,
    height: 50,
    borderRadius: 6,
    margin: 5,
    borderColor: 'gray',
    backgroundColor: 'white'
  },
  iconSend: {},
  iconWrapper: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 9,
    alignItems: 'center',
    borderColor: 'gray',
    backgroundColor: '#3D7AFD',
    margin: 5,
  },
  messageWrapper: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  message: {
    fontSize: 20,
    width: Dimensions.get('screen').width / 2 - 10,
    marginTop: 6,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingTop: 4,
    paddingBottom: 2,
    backgroundColor: '#3D7AFD',
    color:'white'
  },
  myMessage: {
      backgroundColor:'#1F0954',
  },
  myMessageWrapper: {
    alignSelf:'flex-end'
  }
});

export default styles;
