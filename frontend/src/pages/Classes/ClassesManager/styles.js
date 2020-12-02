import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D7AFD',
  },
  header: {
    backgroundColor: 'white',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 10,
    elevation: 2,
    color: '#285BC8',
  },
  optionsWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
    marginHorizontal: 2,
  },
  option: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  requestsNotFoundWrapper: {
    marginTop: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '96%',
    alignSelf: 'center',
    borderRadius: 6,
    padding: 20,
  },
  requestsNotFound: {
    fontSize: 18,
    textAlign: 'center',
  },
  myClassesWrapper: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#285BC8',
    borderRadius: 5,
    elevation: 4,
  },
  myClasses: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  enrollmentWrapper: {
    width: '90%',
    height: 420,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 22,
    borderRadius: 4,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  enrollmentActiveWrapper:{
    width: '90%',
    height: 280,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 22,
    borderRadius: 4,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  userWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  avatar: {
    backgroundColor: '#3D7AFD',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
    padding:5,
    marginLeft:2
  },
  classInformation:{
    marginLeft:5,
    marginTop:15
  },
  discipline:{
    color:'black',
    fontSize: 18,
  },
  price:{
    fontSize:18,
  },
  bioWrapper:{
    marginTop:15,
    width:'98%',
    height:130,
    backgroundColor: '#C4C4C4',
    alignSelf:"center",
    borderRadius:4,
    padding:20
  },
  goals:{
    fontSize:16,
    fontWeight: 'bold',
  },
  button:{
    marginTop:10,
    alignSelf: 'center',
    width:'85%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
    borderRadius:4,
  },
  textButton:{
    fontSize:18,
    color:'white',
    fontWeight: 'bold',
  },
  buttonApproved:{
    backgroundColor:'#285BC8'
  },
  buttonDisapprove:{
    backgroundColor:'#C82828'
  }
});

export default styles;
