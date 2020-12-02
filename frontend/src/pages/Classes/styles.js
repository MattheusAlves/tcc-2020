import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#3D7AFD"

  },
  content:{
    flexDirection:'row'
  },
  title:{
    fontSize: 24,
    fontWeight:"bold",
    color:'white',
    marginBottom:30,
    textTransform:'uppercase'
  },
  optionWrapper:{
      alignItems:"center",
      justifyContent:"flex-end",
      width:Dimensions.get('screen').width /2 - 10,
      height:250,
      margin:5,
    //   paddingVertical:40,
      borderWidth:1,
      backgroundColor: 'white',
      borderRadius:8,
      elevation:10
  },
  option: {
      fontSize:18,
      paddingVertical:20,
      fontWeight:"bold",
      color:'#285BC8',
      textAlign:'center',
      textTransform:'uppercase',
  }
});

export default styles;
