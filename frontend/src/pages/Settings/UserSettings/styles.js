import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(69,68,68,.3)',
  },
  profile:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:8,
    borderRadius:6,
    paddingVertical:10
  },
  header:{
    paddingVertical:10,
    backgroundColor:'#3D7AFD',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
  },
  name:{
    fontSize: 24,
    paddingHorizontal:10,
    fontWeight:'bold',
    color:'white'
  },
  settingOptionWrapper: {
    marginTop: 3,
    height: 65,
    alignItems: 'center',
    backgroundColor: '#3D7AFD',
    marginHorizontal: 8,
    borderRadius: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  settingOption: {
    fontSize: 24,
    color: 'white',
    marginLeft: 30,
  },
});

export default styles;
