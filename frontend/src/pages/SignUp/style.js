import {StyleSheet, Animated, Dimensions} from 'react-native';

import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    width: '95%',
    height: 60,
    marginBottom: 13,
    fontSize: 17,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white'
  },
  inputName: {
    marginBottom: 18,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //   backgroundColor: commonStyles.colors.authBody,
  },
  backgroundImage: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: '100%',
    backgroundColor: 'blue',
  },
  container: {
    alignItems: 'center',
    width: '90%',
  },
  btn: {},
  registerText: {
    fontWeight: 'bold',
    color: commonStyles.colors.mainText,
    fontSize: 18,
  },
  btn: {
    ...commonStyles.button,
    marginTop: 15,
  },
  headerWrapper:{
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle:{
    color:'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
export default styles;
