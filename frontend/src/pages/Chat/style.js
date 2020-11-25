import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  userWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 4,
    // borderTopWidth:1,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  userName: {
    textAlign: 'center',
    fontSize: 24,
  },
  avatar: {
    marginTop: 2,
    marginLeft: 2,
    backgroundColor: 'rgba(88,150,241,1)',
    marginRight: 10,
  },
  statusOn: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    backgroundColor: '#33cc33',
    right: 0,
    position: 'absolute',
    marginHorizontal:8,
    // elevation:2
  },
  statusOff: {
    width: 25,
    height: 25,
    // borderWidth:1,
    borderColor: 'gray',
    borderRadius: 15,
    backgroundColor: 'lightgray',
    right: 0,
    position: 'absolute',
    marginHorizontal:8,
    // elevation:2
  },
  isTeacher: {
      fontSize: 12,
      color:'gray',
  },
  messageNotificatios: {
    
  }
  
});

export default styles;
