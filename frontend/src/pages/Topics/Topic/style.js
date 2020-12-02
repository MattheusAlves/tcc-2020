import {StyleSheet, Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#285BC8',
    padding: 10,
  },
  userInformation: {
    marginBottom: 1,
    borderRadius: 4,
    padding: 20,
    margin: 5,
    backgroundColor: 'white',
    elevation: 2,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  icon: {
      borderWidth:2,
      borderColor: 'gray',
      padding:5
  },
  responseName: {
    fontSize: 17,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  topic: {
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 20,
    paddingHorizontal: 10,
    margin: 5,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  containerResponse: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputResponse: {
    flex: 1,
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 7,
    backgroundColor: 'white',
    height: 60,
    width: '80%',
  },
  submitWrapper: {
    paddingVertical: 19,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 2,
  },
  submit: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color:'#285BC8'
  },
  responses: {
    padding: 10,
    borderRadius: 4,
    // backgroundColor:'white'
  },
  response: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 2,
  },
  responseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
    marginTop: 2,
  },
  separator: {
      flex:1,
      borderWidth:1,
      borderColor: 'lightgray',
      marginBottom: 5
  },
  createdAt: {
    alignSelf: 'flex-start',
    fontStyle: 'italic',
    bottom: 0,
    marginTop:10,
    paddingBottom:5
  },
  notes: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  viewRate: {
    flexDirection: 'row',
    paddingHorizontal: 4,
    justifyContent: 'center',
  },
  rateLength: {
    color: 'black',
    textAlignVertical: 'bottom',
    paddingHorizontal: 5,
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  rateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dislikeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default styles;
