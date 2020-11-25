import {StyleSheet, Dimensions} from 'react-native';
const WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  textareaContainer: {
    width: WIDTH - 40,
    height: 120,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor: '#ffff',
  },
  textarea: {
    padding: 10,
  },
  viewModal: {
    height: 230,
    backgroundColor: '#3D7AFD',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal:10,
    paddingVertical:20,
  },
  buttonSubmitWrapper:{
      marginTop:35,
      borderWidth:1,
      borderColor: 'white',
      paddingVertical:8,
      paddingHorizontal:22,
      backgroundColor:"white",
      borderRadius:5,
      elevation:5,
      alignSelf:'flex-end'
  },
  buttonSubmit:{
    fontSize:16,
    fontWeight:"bold"
  }
});

export default styles;
