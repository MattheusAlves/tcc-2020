import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#285BC8',
    // alignItems: 'center',;
  },
  svg: {
    marginTop: 30,
    alignSelf:'center'
  },
  categoryWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:20
  },
  iconCheck: {
    marginRight: 20,
  },
  category:{
    color:'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical:15,
    flexWrap: 'wrap',
    maxWidth:Dimensions.get('screen').width -95
  },
  contentWrapper: {
    alignItems: 'center',
  },
  title:{
      width:'90%',
      backgroundColor: 'white',
      borderRadius:4,
      marginBottom:10,
      elevation:4
  },
  textareaContainer: {
      width:'90%',
      backgroundColor: 'white',
      borderRadius:4,
      height:200,
      elevation:4
  },
  textarea:{
      padding:15
  },
  submitButton: {
      paddingHorizontal:65,
      paddingVertical:15,
      backgroundColor: 'white',
      margin:25,
      borderRadius:4,
      elevation:4
  },
  submitText:{
    fontWeight:'bold',
    fontSize:24,
    color:'#285BC8'
  }
});

export default styles;
